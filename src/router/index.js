import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Topics from '../views/Topics.vue';
import Topic from '../views/Topic.vue';
import Contacts from '../views/Contacts.vue';
import About from '../views/About.vue';
import JoinToTopic from '../views/JoinToTopic.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			title: 'Main',
			subTitle: ''
		},
		component: Home
	},
	{
		path: '/topics',
		name: 'Topics',
		meta: {
			title: 'Topics',
			subTitle: 'Currently we providing only these topics'
		},
		component: Topics
	},
	{
		path: '/topic/:id',
		name: 'Topic',
		meta: {
			title: 'EstNews',
			subTitle: 'Estonia, Baltic states'
		},
		component: Topic
	},
	{
		path: '/topic/:id/join',
		name: 'Join to topic',
		meta: {
			title: 'Join to topic',
			subTitle: 'EastNews'
		},
		component: JoinToTopic
	},
	{
		path: '/event/:id',
		name: 'Event',
		component: Event,
		meta: {
			title:
				'Департамент шоссейных дорог обратился к водителяям с предупреждением',
			subtitle: '21.02.2020'
		}
	},
	{
		path: '/contacts',
		name: 'Contacts',
		meta: {
			title: 'Contacts',
			subTitle: 'Use form to any kind contact'
		},
		component: Contacts
	},
	{
		path: '/about',
		name: 'About',
		meta: {
			title: 'About',
			subTitle: 'Just About page'
		},
		component: About
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
