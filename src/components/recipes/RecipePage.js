import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipesActions from '../../actions/recipeActions';
import Loader from 'Loader';

class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
    this.handleCreateRecipe = this.handleCreateRecipe.bind(this);
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.getRecipes();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipes.error) {
      alert(nextProps.recipes.error);
    } else if (nextProps.recipes.isFetching) {
      this.setState({
        loading: true
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  handleCreateRecipe() {
    const { actions } = this.props;
    actions.createRecipeAction({title: 'create recipe'});
  }

  render() {
    const { recipes } = this.props;
    const { loading } = this.state;

    return (
      <div className="main-content">
        <h1>Recipes</h1>
        <button onClick={this.handleCreateRecipe}>{'create recipe'}</button>
        {loading && <Loader />}

        {!loading && recipes.list.map((el, i) => {
            return <li key={i}>{el.title}</li>;
          })}
      </div>
    );
  }
}

RecipePage.propTypes = {
  actions: PropTypes.object.isRequired,
  recipes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(recipesActions, dispatch)
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
