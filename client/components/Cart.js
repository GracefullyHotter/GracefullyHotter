import React from "react"
// import { connect } from "react-redux"

class Cart extends React.Component {
	constructor() {
		super()
		// this.state = {
		// 	loading: true,
		// }
	}

	// componentDidMount() {
	// 	this.props.fetchCart()
	// 	this.setState({ loading: false })
	// }

	// handleChange(event) {
	// 	event.preventDefault()
	// 	this.setState({
	// 		[event.target.name]: event.target.value,
	// 	})
	// }

	render() {
		// if (loading) {
		// 	return <div>Loading...</div>
		// }

		return (
			<>
				<h1
					style={{ textAlign: "center", margin: "auto", marginBottom: "40px" }}
				>
					Cart
				</h1>
				{/* {cart.length > 0 ? ( */}
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "auto",
						padding: "20 50 20 50",
						height: "​100vh",
						width: "200px",
						border: "1px solid black",
					}}
				>
					{/* {cart.map((cartItem) => ( */}
					<div>
						<div>
							<span>Hot Sauce Name</span>
						</div>

						<div>
							Image
							{/* <img src={sauce.imageURL} alt="" /> */}
						</div>

						<div>
							<span>Description</span>
						</div>

						<div>
							<button type="button" name="button">
								<span> - </span>
							</button>
							<span>quantity</span>
							<button type="button" name="button">
								<span> + </span>
							</button>
						</div>

						<div>$</div>
					</div>
				</div>
				{/* ))} */}
				{/* ) : (
					<h1>Empty Cart</h1>
				)} */}
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "​100vh",
					}}
				>
					<button style={{ margin: "20px" }}>CHECKOUT</button>
				</div>
			</>
		)
	}
}

// const mapState = (state) => {
// 	return {
// 		cart: state.cart,
// 	}
// }

// const mapDispatch = (dispatch) => {
// 	return {
// 		fetchCart: () => dispatch(fetchCart()),
// 		addToCart: () => dispatch(addToCart()),
// 		decreaseQuantity: () => dispatch(decreaseQuantity()),
// 	}
// }

// export default connect(mapState, mapDispatch)(Cart)
export default Cart
