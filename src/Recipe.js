import React from 'react';

class Recipe extends React.Component {
    render() {
        return (
            <div className="recipe">
                Recipe:
                <div className="recipe-name">
                    name: {this.props.recipe.name}
                </div>
                <div className="recipe-type">
                    type: {this.props.recipe.type}
                </div>
                <div className="recipe-batchSize">
                    batchSize: {this.props.recipe.batchSize}
                </div>
                <div className="recipe-boilSize">
                    boilSize: {this.props.recipe.boilSize}
                </div>
                <div className="recipe-boilTime">
                    boilTime: {this.props.recipe.boilTime}
                </div>
                <div className="recipe-fermentables">
                    fermentables: {this.props.recipe.fermentables.map((i) => (
                        i.name + '; '
                    ))}
                </div>
                <div className="recipe-hops">
                    hops: {this.props.recipe.hops.map((i) => (
                        i.name + '; '
                    ))}
                </div>
                <div className="recipe-yeasts">
                    yeasts: {this.props.recipe.yeasts.map((i) => (
                        i.name + '; '
                    ))}
                </div>
                <div className="recipe-mash">
                    mash: {this.props.recipe.mash.name}
                </div>
            </div>
        )
    }
}

export default Recipe;