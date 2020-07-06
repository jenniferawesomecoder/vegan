import React from 'react';
import { Link } from 'react-router-dom';
import { getAllUserRecipes } from '../services/api-helper';

export default class MainPageUser extends React.Component {
  state = {
    currentUserRecipes: []
  }


  allUserRecipes = async (id) => {
    const userRecipes = await getAllUserRecipes(id)
    this.setState({
      currentUserRecipes: userRecipes
    })
  }

  componentDidMount = () => {
    this.allUserRecipes(this.props.currentUser.id)
  }

  render() {
    return (
      <div className="main-side">
        <div id="profile-top" className="main-side-top">
          <div className="main-side-top-buttons">
            <div id="user-image">
              {this.props.currentUser.image_url === null ? <Link to={`/update_profile/${this.props.currentUser.id}`}><img src='https://i.imgur.com/HZPz2tu.png' alt="default user profile" /></Link> : <Link to={`/update_profile/${this.props.currentUser.id}`}><img src={this.props.currentUser.image_url} alt="current user profile" /></Link>}
            </div>
            {/*<h3 className="main-side-heading">Representing {this.props.currentUser.location}</h3>*/}
            <div className="main-side-buttons">

              <button onClick={this.props.handleLogout} className="small-button">Logout</button>
            </div>
          </div>
          <div className="sticky">
            <a className="sticky-anchor" href="#profile-top">
              <h1>{this.props.currentUser.username}</h1>
            </a>
            <Link to="/recipes/new">
              <button>Create</button>
            </Link>
          </div>
          <h1 className="black">My Recipes</h1>
          <div className="side-segment-grid">
            {
              // [TBU] - After Edit; page needs refresh to show
              this.state.currentUserRecipes &&
              this.state.currentUserRecipes.map(recipe => (
                <div className="main-container-segment" key={recipe.id}>
                  <div className="main-container-sub-segment">
                    <div className="container-segment">
                      <div className="card-segment">
                        <div className="face-segment face1-segment">
                          <div className="content-segment">
                            <div className="sub-segment-card-heading">
                              <h3>{recipe.title}</h3>
                              {/* <h4>Chef: {recipe.user.username}</h4> */}
                            </div>
                          </div>
                          <Link to={`/full_recipe/${recipe.id}`}>
                            <button id={recipe.id} className="main-page-button-segment-info">Cook</button>
                          </Link>
                        </div>
                        <div className="face-segment face2-segment" style={{ background: 'url(' + recipe.image_url + ')' }}>
                          <h2 className="title-outline">{recipe.title}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
