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
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import { Separator, Cell, Avatar } from '@vkontakte/vkui';
import Icon24Education from '@vkontakte/icons/dist/24/education';

const Persik = ({go, id, fetchedUser}) => (


<Panel id={id}>
		<PanelHeader>Информация</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline  /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik1"
          ><Icon28UsersOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon24Education width={30} height={30} /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline fill="#4682B4" /></TabbarItem>
        </Tabbar>
        
        <Group title="Что это?">
          <Div>
          Данное приложение создано для помощи ученикам кванториума. Тут можно посмотреть ФИО преподавателей, расписание, перейти по полезным ссылкам. Так же в приложении присутствует КвантИгра. И т.д.........
          </Div>
        </Group>
        <Group>
          <Div>
          <b>Нашли ошибку баг, хотите сделать предложение?</b>
          <Separator style={{ margin: '12px 0' }} />
          <Cell
          photo="https://maxplayers.net/files/news_imgs/1513445269.jpg"
          description="Разработчик"
          bottomContent={<Button>Написать</Button>}
          before={<Avatar src="https://maxplayers.net/files/news_imgs/1513445269.jpg" size={80}/>}
          size="l"
        >
          Рылов Тимофей
        </Cell>
        </Div>
        </Group>
	</Panel>
);



Persik.propTypes = {
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

export default Persik;