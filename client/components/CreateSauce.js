import React from "react";

class CreateSauce extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>NEW SAUCE FORM</h1>

        <form>
          <div className="field">
            <label htmlFor="name" className="label">
              Hot Sauce Name *
            </label>
            <div className="control">
              <input className="input" type="text" placeholder="Name" />
            </div>

            <label htmlFor="pepper" className="label">
              Pepper *
            </label>
            <div className="control">
              <input className="input" type="text" placeholder="Pepper" />
            </div>
            <label htmlFor="description" className="label">
              Description *
            </label>
            <div className="control">
              <input className="input" type="text" placeholder="description" />
            </div>
            <label htmlFor="user-rating" className="label">
              User Rating *
            </label>
            <div className="control">
              <input className="input" type="text" placeholder="user-rating" />
            </div>
            <label htmlFor="SHU" className="label">
              SHU
            </label>
            <div className="control">
              <input className="input" type="text" placeholder="SHU" />
            </div>
            <label htmlFor="price" className="label">
              Price *
            </label>
            <div className="control">
              <input className="input" type="text" placeholder="price" />
            </div>
            <label htmlFor="image" className="label">
              Image
            </label>
            <div className="control">
              <input className="input" type="text" placeholder="image" />
            </div>
          </div>

          <button className="button" type="submit">
            Button
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateSauce;
