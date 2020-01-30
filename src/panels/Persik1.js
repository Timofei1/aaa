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
import {platform, IOS, HeaderButton, FormStatus, Header, Cell, Avatar} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon24Education from '@vkontakte/icons/dist/24/education';

const osname = platform();

const Persik1 = ({go, id, fetchedUser}) => (


<Panel id={id}>
		<PanelHeader>Баллы</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik1"
          ><Icon28UsersOutline fill="#4682B4" /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon24Education width={30} height={30} /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline /></TabbarItem>
        </Tabbar>
        
        <Group>
          <Div>
        <FormStatus title="Тестовый запуск">
          Этот раздел запущен в тестовом режиме. Баллы начисляются только за занятия в VR квантуме.
        </FormStatus>
        </Div>
        <Header level="secondary">
          Как играть?
          </Header>
          <Div>
          За каждый урок преподаватели ставят отпределенное количество баллов(от -5 до 5). Чем лучше работа на занятии, тем больше начисляется баллов. Набравший больше баллов получит приз от кванторниума в конце года. 
          </Div>
        </Group>
        <Group title="Таблица баллов">
        
        <Cell before={<Avatar>1</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar>2</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar>3</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar>4</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar>5</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar>6</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar>7</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar>8</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar>9</Avatar>}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar />}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar />}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar />}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar />}description="100 баллов">Тестовый Юзер</Cell>
        <Cell before={<Avatar />}description="100 баллов">Тестовый Юзер</Cell>

        </Group>
	</Panel>
);



Persik1.propTypes = {
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

export default Persik1;