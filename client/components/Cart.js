import React from "react"
import { connect } from "react-redux"
import { fetchSauce } from "../store/sauce"
import { Link } from "react-router-dom"
import { checkoutCart, updateCart, deleteCartItem } from "../store/cart"
import { toast } from "react-toastify"
import { injectStyle } from "react-toastify/dist/inject-style"

injectStyle()
toast.configure()

class Cart extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			cart: JSON.parse(localStorage.getItem("cart")),
		}

		this.handleCheckout = this.handleCheckout.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
	}

	async handleChange(e, cartItem) {
		const increment = e.target.id === "plus"
		let updatedQuantity = 0

		const updatedCart = this.state.cart.map((item) => {
			if (item.id === cartItem.id) {
				increment
					? (++item.quantity,
					  toast.success("Sauces Increased!", {
							position: toast.POSITION.BOTTOM_RIGHT,
					  }))
					: (--item.quantity,
					  toast.success("Sauces Decreased!", {
							position: toast.POSITION.BOTTOM_RIGHT,
					  }))
				updatedQuantity = item.quantity
			}
			return item
		})

		window.localStorage.setItem("cart", JSON.stringify(updatedCart))
		await this.setState({ cart: updatedCart })
		if (updatedQuantity === 0) {
			this.handleRemove(cartItem.id)
		} else
			this.props.updateCart({
				id: cartItem.id,
				price: cartItem.price,
				quantity: updatedQuantity,
			})
	}

	handleCheckout() {
		this.props.checkout()
	}

	handleRemove(id) {
		toast.success("Sauce Removed From Cart!", {
			position: toast.POSITION.BOTTOM_RIGHT,
		})
		const newCart = this.state.cart.filter((item) => item.id !== id)
		window.localStorage.setItem("cart", JSON.stringify(newCart))
		this.setState({ cart: newCart })
		this.props.deleteItem(id)
	}

	render() {
		const { cart } = this.state
		console.log(cart)
		console.log(
			(
				cart
					.map((cartItem) => cartItem.price * cartItem.quantity)
					.reduce((a, b) => a + b, 0) / 100
			).toFixed(2)
		)

		const btns = [
			{ id: "plus", content: "+" },
			{ id: "minus", content: "-" },
		]

		// if (cart.length === 0) {
		//   return <h1>no items in your cart!</h1>;
		// }

		return (
			<React.Fragment>
				<h1 className="cart-title">Cart</h1>

				{cart.map((cartItem, idx) => (
					<article key={cartItem.id} className="media">
						<figure className="media-left">
							<p className="image is-64x64">
								<img src={cartItem.imageURL} />
							</p>
						</figure>
						<div className="media-content">
							<div className="content">
								<p>
									<strong>{cartItem.name}</strong>
									<br />
									<small>
										Quantity:
										{cartItem.quantity}
									</small>
									<br />

									{btns.map((btn, btnIdx) => (
										<button
											type="button"
											key={btnIdx}
											id={btn.id}
											onClick={(e) => this.handleChange(e, cartItem)}
										>
											{btn.content}
										</button>
									))}
									<button
										type="button"
										id="delete"
										onClick={() => this.handleRemove(cartItem.id)}
									>
										Remove
									</button>

									<br />

									<span>
										${((cartItem.price / 100) * cartItem.quantity).toFixed(2)}
									</span>
								</p>
							</div>
						</div>
					</article>
				))}
				<h1>
					Subtotal: $
					{(
						cart
							.map((cartItem) => cartItem.price * cartItem.quantity)
							.reduce((a, b) => a + b, 0) / 100
					).toFixed(2)}
				</h1>
				<Link to={"/checkout"}>
					<button className="button is-large is-danger">Checkout</button>
				</Link>
			</React.Fragment>
		)
	}
}

const mapState = (state) => ({
	sauce: state.sauce,
})

const mapDispatch = (dispatch) => ({
	getSauce: (id) => dispatch(fetchSauce(id)),
	updateCart: (item) => dispatch(updateCart(item)),
	checkout: () => dispatch(checkoutCart()),
	deleteItem: (id) => dispatch(deleteCartItem(id)),
})

export default connect(mapState, mapDispatch)(Cart)
