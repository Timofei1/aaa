import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import {platform, IOS, HeaderButton, Cell, Avatar} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';

const osname = platform();

const Persik2 = ({go, id, fetchedUser}) => (


<Panel id={id}>
		<PanelHeader
    left={<HeaderButton onClick={go} data-to="home">
    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
  </HeaderButton>}
>
    Библтотека</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik1"
          ><Icon28UsersOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon24Education width={30} height={30} fill="#4682B4"/></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline /></TabbarItem>
        </Tabbar>
        
        <Group title="Проекты">
          <Div>
            <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>
          <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>
          <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>
          <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>
          <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>
          <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>
          <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>
          <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>
          <Button level="tertiary" before={
          <Cell before={<Avatar><center><Icon24Favorite /></center></Avatar>} description="Тест описание">Тест проект</Cell>}/><br/>

          </Div>
        </Group>
        
	</Panel>
);



Persik2.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),

};

export default Persik2;