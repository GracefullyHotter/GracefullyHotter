import React from "react"
import { connect } from "react-redux"
import { fetchSauce } from "../store/sauce"
import { addToCart } from "../store/cart"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { injectStyle } from "react-toastify/dist/inject-style"
import SHUToolTip from "./SHUToolTip"

injectStyle()
toast.configure()

class SingleSauce extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: true,
		}

		this.handleAddToCart = this.handleAddToCart.bind(this)
	}

	componentDidMount() {
		const id = +this.props.match.params.id
		this.props.getSauce(id)
		this.setState({ loading: false })
	}

	handleAddToCart() {
		toast.success("Sauce Added To Cart!", {
			position: toast.POSITION.BOTTOM_RIGHT,
		})
		this.props.addToCart({
			id: this.props.sauce.id,
			price: this.props.sauce.price,
			quantity: 1,
			name: this.props.sauce.name,
			imageURL: this.props.sauce.imageURL,
		})
	}

	render() {
		const { name, imageURL, description, pepper, userRating, SHU, price, id } =
			this.props.sauce
		const { isAdmin } = this.props

		const { loading } = this.state

		if (loading) {
			return <div>Loading...</div>
		}

		return (
			<div style={{ display: "flex", margin: "20px" }}>
				<div style={{ margin: "10px" }}>
					<h1 className="title">{name}</h1>
					<p>
						<img src={imageURL} />
					</p>
				</div>
				<div style={{ margin: "20px" }}>
					<p className="title is-4 has-text-danger">"{description}"</p>
					<p className="title is-4 ">Pepper(s): {pepper}</p>
					<p className="title is-4 ">Rating: {userRating}</p>

					<p className="title is-4 ">
						Heat (SHU): {SHU}
						<SHUToolTip />
					</p>

					<p className="title is-4 ">Price: ${(price / 100).toFixed(2)}</p>
					<Link className="button is-medium is-warning" to="/shop">
						Back to all sauces
					</Link>

					<button
						style={{ margin: "0 10px" }}
						className="button is-medium is-danger"
						onClick={this.handleAddToCart}
					>
						ADD TO CART
					</button>

					{isAdmin ? (
						<Link className="button is-medium is-link" to={`/editsauce/${id}`}>
							Edit Sauce
						</Link>
					) : (
						<div />
					)}
				</div>
			</div>
		)
	}
}

const mapState = (state) => ({
	sauce: state.sauce,
	isAdmin: state.auth.isAdmin,
})

const mapDispatch = (dispatch) => ({
	getSauce: (id) => dispatch(fetchSauce(id)),
	addToCart: (item) => dispatch(addToCart(item)),
})

export default connect(mapState, mapDispatch)(SingleSauce)
