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
 
 class Aero extends React.Component {

    constructor (props) {
      super(props);
    }

    render () {

      return (
        <div>
        <Group title="Преподаватель">
          <Div>
            <i>Имя Фамилия Отчество</i>
          </Div>
        </Group>
        <Group title="Расписание">
          <Div>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>

            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>
            <b>Группа N</b>: ДеньНедели хх:хх - хх:хх<br/>

          </Div>
        </Group>
        </div>
);
}
}

export default Aero;