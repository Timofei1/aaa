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
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon24Privacy from '@vkontakte/icons/dist/24/privacy';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24LogoLivejournal from '@vkontakte/icons/dist/24/logo_livejournal';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Example from './Example';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon24Education from '@vkontakte/icons/dist/24/education';

const Home = ({go, id, fetchedUser}) => (


<Panel id={id}>
		<PanelHeader>Кванториум</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline fill="#4682B4" /></TabbarItem>
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
          ><Icon28HelpOutline /></TabbarItem>
        </Tabbar>
       
        <Example/>

        
	</Panel>
);



Home.propTypes = {
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

export default Home;