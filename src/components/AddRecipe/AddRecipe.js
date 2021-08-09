import React, { Component } from 'react'

export class AddRecipe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form className="Add_recipe--form" onSubmit={handleSubmit()}>
                    <div>
                        <h2>Create a new recipe</h2>
                    </div>
                    <div className="form-control">
                        <label htmlFor="recipe-name">recipe Name</label>
                        <input
                            id="recipe-name"
                            type="text"
                            className="recipe_name"
                            onChange={updateName(e.target.value)}
                        />

                    </div>

                    <div className="form-control">
                        <label htmlFor="recipe-content">recipe Content</label>
                        <textarea
                            id="recipe-content"
                            onChange={updateContent(e.target.value)}
                        ></textarea>

                    </div>

                    <div className="form-control">
                        <button type="submit" disabled={validateName() || validateContent()}>
                            Addrecipe
                        </button>
                    </div>
                    <p>{postResponse}</p>
                </form>
            </div>
        );
    }
}


export default AddRecipe
