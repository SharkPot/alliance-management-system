import yerkesImg from '../../Resources/yerkes.bmp';

const GENERAL_GUIDE_LIST = {
    Meseta:[
		{
			type:'special-paragraph',
			data: 'All of the below can be done without any gear, in multiplayer parties without Premium and can be repeated Alt characters.',
			title:'sp1'
		},
		{
			type:'special-paragraph',
			data:'With just weekly quests being done on 3 characters(3 is the maximum number of characters without buying slots), You earn 6 million per week.',
			title:'sp2'
		},
		{
			type:'paragraph',
			data:`Daily Client Orders are available to be accepted from left side of Main Gate in the Gate Area. These refresh on daily basis, reward decent amount of meseta and extremely low effort. Certain Daily Client Order's also provide small TriBoost(Meseta,Exp,Rare drop rate boost).`,
			title:'p1',
			heading:'Daily Orders'
		},
		{
			type:'list',
			data:[`- Supress Bar Lodos ( 250,000 meseta )`, `- Item Procurement ( 100,000 meseta )`, `- Complete Expedetions/Quests ( 99,000-130,000 meseta )`,`- Supress Enemies (60,000-130,000 meseta)`],
			title:'l1'
		},
		// {
		// 	type:'image',
		// 	data:yerkesImg,
		// 	title:'02'
		// }
		{
			type:'paragraph',
			data:`Yerkes in Cafe Area has 5 Client Order's ( each worth 100,000 meseta ) for certain harvesting materials. These items are:`,
			heading:'Client Orders',
			title:'p2'
		},
		{
			type:'list',
			data:['- Naveshroom (Naverius)','- Amduskian Dragonscale (Amduskia)','- Lilipan Vest (Lilipa)','- Wopal Shell (Wopal)','- Harukotan Fragment (Harukotan)','- Empty Bottle (Earth)'],
			title:'l2'
		},
		{
			type:'paragraph',
			data:'Weekly Arks Quest can reward upto 2 million meseta. These Quests refresh weekly. These quests generally requires you to do some basic tasks such as enhance items or complete advance quests(AQ) or extreme quests(EQ) etc.',
			heading:`Arks Weekly Quest`,
			title:'p3'
		}
	],
	Gear:[]
};

export default GENERAL_GUIDE_LIST;