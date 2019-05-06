import React from "react";
import Header from "./Header";
import ListOfBeers from "./ListOfBeers";
import MainPicture from "./MainPicture";
import About from './About';
import AddBeerForm from './AddBeerForm';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      availableBeers: [
        {
          name: 'Hefe',
          brewery: 'Widmer Brothers',
          alcoholPercent: '5%',
          region: 'Northwest'
        },
        {
          name: 'RPM IPA',
          brewery: 'Boneyard',
          alcoholPercent: '6.5%',
          region: 'Northwest'
        },
        {
          name: 'Hop Venom',
          brewery: 'Boneyard',
          alcoholPercent: '9%',
          region: 'Northwest'
        },
        {
          name: 'Drop Top Amber',
          brewery: 'Widmer Brothers',
          alcoholPercent: '5.3%',
          region: 'Northwest'
        },
        {
          name: 'Brooklyn Lager',
          brewery: 'Brooklyn Brewery',
          alcoholPercent: '5.2%',
          region: 'Northeast',
        },
        {
          name: 'Bel Air Sour',
          brewery: 'Brooklyn Brewery',
          alcoholPercent: '5.8%',
          region: 'Northeast'
        },
        {
          name: 'California Craft Lager',
          brewery: 'Mission Brewery',
          alcoholPercent: '4.2%',
          region: 'Southwest'
        },
        {
          name: 'Mission Blonde',
          brewery: 'Mission Brewery',
          alcoholPercent: '5%',
          region: 'Southwest'
        },
        {
          name: 'The Power of Zeus',
          brewery: 'High Hops Brewery',
          alcoholPercent: '7%',
          region: 'Central'
        },
        {
          name: 'The Witty One',
          brewery: 'High Hops Brewery',
          alcoholPercent: '4.8%',
          region: 'Central'
        }
      ]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.availableBeers.slice();
    newMasterBeerList.push(newBeer);
    this.setState({availableBeers: newMasterBeerList});
  }

  render() {
    return (
      <div>
        <Header/>
        <MainPicture/>
        <Switch>
          <Route exact path='/' render={()=><ListOfBeers beerList={this.state.availableBeers} />} />
          <Route exact path='/about' component= {About} />

          <Route exact path='/addbeer' render={()=><AddBeerForm onNewBeerCreation={this.props.onNewBeerCreation} />} />
        </Switch>
      </div>
    );

  }
}

export default App;
