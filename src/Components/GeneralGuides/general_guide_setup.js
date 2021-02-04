import deoSwordImg from '../../Resources/deo_sword.bmp';
import sigmaSwordImg from '../../Resources/sigma_sword.bmp';
import croseusSwordImg from '../../Resources/croseus_sword.bmp';
import revolosioSwordImg from '../../Resources/revolosio_sword.bmp';
import ophiSwordImg from '../../Resources/ophi_sword.bmp';
import atlasexSwordImg from '../../Resources/atlasex_sword.bmp';
import trailSwordImg from '../../Resources/trail_sword.bmp';
import rivSwordImg from '../../Resources/riv_sword.bmp';
import stilSwordImg from '../../Resources/stil_sword.bmp';
import ayerSwordImg from '../../Resources/ayer_sword.bmp';
import crasSwordImg from '../../Resources/cras_sword.bmp';
import brissaBackImg from '../../Resources/brissa_back.bmp';
import saikiBackImg from '../../Resources/saiki_back.bmp';
import hieiBackImg from '../../Resources/hiei_back.bmp';

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
	Gear:[
		{
			type:'paragraph',
			data:'Gearing under Level 40 is pretty simple due to very few options. Try to equip anything that is equipable and has better base stats than what you are using. Best items to would be Sigma and Deo series of weapons.',
			heading:'Gearing under Level 40',
			title:'p1'
		},
		{
			type:'image',
			data:[deoSwordImg,sigmaSwordImg],
			title:'i1'
		},
		{
			type:'paragraph',
			data:'For units you are looking at Brissa, Saiki and Hiei sets. Hiei set should be available free of cost if completing story quests. Brissa set is available in RWB shop.',
			title:'p2'
		},
		{
			type:'image',
			data:[brissaBackImg,saikiBackImg,hieiBackImg],
			title:'i2'
		},
		{
			type:'paragraph',
			data:'You should be checking out Collection Folder weapons which you can equip. If your equip stats are low, you can look at Revolosio series. Parallely aim for Croseus Series, they should be relatively easy to equip and are pretty much the best series of weapons to use, ignoring Endgame craftable weapons. If you collect 5 Collection Folder Croseus weapons you can enhance the weapon to +35 which gives it a hidden 15% extra damage.',
			heading:'Gearing above Level 40',
			title:'p3'
		},
		{
			type:'image',
			data:[revolosioSwordImg,croseusSwordImg],
			title:'i3'
		},
		{
			type:'paragraph',
			data:'These are the endgame weapons which one should aim towards depending on the requirements you need (such as S-grade augments). There might be class specific weapons which might be better which are not mentioned here. Consult Class Guides for your class to know more about those.',
			heading:'Endgame Weapons'
		},
		{
			type:'list',
			title:'l1',
			data:[
				'- Ophistia: Increase Power by 9%. Generates a barrier (Negate Knockback, 30% Automatic PP Recovery and 40% Attack PP Recovery) at regular intervals (every 30s).',
				'- Atlas Ex: Increase Power by 10%. Survive one fatal attack with 1 HP, and restore 10% HP every 0.5secs and become invincible for 5secs.',
				'- Lightstream: Increase Power by 10%. Fully restore PP when casting a PA/Tech while below 10% PP and bestow an additional Power bonus (3%) for 30 seconds (120s Recast).',
				'- Rivalate: Increase Critical Hit Rate by 20% and increase Power by 16%. Decrease PP consumption by 15%.',
				'- Stil: Power bonus decreases when taking damage and recovers over time. When Power bonus is 16%, gain 40% Damage Resistance, increase Natural PP Recovery by 60%, regenerate 20 PP every 10 seconds, and become Massive',
				'- Ayer (to be released): Boosts damage by 12%. Reduces PP consumption by 20%. Recovers 20 PP every 10 seconds',
				'- Cras (to be released): Grants the effect of Reincarnation of Fate. After using three Normal Attacks, for 30 seconds, changes the effect of this Potential to: Boosts damage by 18.72%, reduces damage taken by 30%, and negates knockback (30s Recast after effect ends)'
			]
		},
		{
			type:'image',
			data:[ophiSwordImg,atlasexSwordImg,trailSwordImg,rivSwordImg,stilSwordImg,ayerSwordImg,crasSwordImg],
			title:'i4'
		}
	]
};

export default GENERAL_GUIDE_LIST;