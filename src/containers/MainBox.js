import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    component: "profile"
  }

  changeComponent = (newValue) => {
    this.setState({
      component: newValue
    })
  }

  //       component: event.target.id

  render() {
    const detailsToDisplay = {
      profile: Profile,
      photos: Photos,
      cocktails: Cocktails,
      pokemon: Pokemon
    }

    return (
      <div>
        <MenuBar changeComponent={this.changeComponent} />
        {this.state.component !== "pokemon" ?
        detailsToDisplay[this.state.component]() :
        <Pokemon />}
      </div>
    )
  }

}

export default MainBox

/*

Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

*/


// A few things to think about:

// Which component should have state?
// Based on your answer to the question above, which component should have a method to change state?
// Which component should call the function that changes state?
// Which component is responsible for passing down props?
// How can state be used to manage the rendering of components and change the style of components already on the page?
