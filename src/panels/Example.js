import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import Spinner from '@vkontakte/vkui/dist/components/Spinner/Spinner'
import { Separator, platform } from '@vkontakte/vkui';
import { PanelHeaderBack, Epic, View, Switch } from '@vkontakte/vkui';
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Example1 from './Example1';
import VR from './VR';
import Aero from './Aero';
import Diz from './Diz';
import Rob from './Rob';
import Xa from './Xa';
import St from './St';

 
 class Example extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        activeTab1: 'recomendations',
        activeTab2: 'all',
        activeTab3: 'all',
        activeTab4: 'dial',
        activeTab5: 'events',
        activeTab6: 'all',
      };
    }

    render () {

      return (
        <Panel>
        <FixedLayout vertical="top">
        <Tabs type="buttons">
                <HorizontalScroll>
                
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'all' })}
                    selected={this.state.activeTab3 === 'all'}
                  >
                    IT
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'user' })}
                    selected={this.state.activeTab3 === 'user'}
                  >
                    VR/AR
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'inter' })}
                    selected={this.state.activeTab3 === 'inter'}
                  >
                    Аэро
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'top' })}
                    selected={this.state.activeTab3 === 'top'}
                  >
                    Дизайн
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'rob' })}
                    selected={this.state.activeTab3 === 'rob'}
                  >
                    Робототехника
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'xa' })}
                    selected={this.state.activeTab3 === 'xa'}
                  >
                    Хайтек
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'st' })}
                    selected={this.state.activeTab3 === 'st'}
                  >
                    Старт
                  </TabsItem>
                </HorizontalScroll>
              </Tabs>
              </FixedLayout>

           {this.state.activeTab3 === 'all' ? 
           <Example1/>
            :null }

           {this.state.activeTab3 === 'user' ?
           <VR/>
           :null } 

           {this.state.activeTab3 === 'inter' ?
           <Aero/>
           :null } 

           {this.state.activeTab3 === 'top' ?
           <Diz/>
           :null } 

           {this.state.activeTab3 === 'rob' ?
           <Rob/>
           :null } 

           {this.state.activeTab3 === 'xa' ?
           <Xa/>
           :null }

           {this.state.activeTab3 === 'st' ?
           <St/>
          :null }
           

           </Panel>
);
}
}

export default Example;