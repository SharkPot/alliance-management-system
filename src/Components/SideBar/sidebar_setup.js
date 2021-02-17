import class_HU from '../../Resources/class_hunter.bmp'
import class_FI from '../../Resources/class_fighter.bmp'
import class_RA from '../../Resources/class_ranger.bmp'
import class_GU from '../../Resources/class_gunner.bmp'
import class_FO from '../../Resources/class_force.bmp'
import class_TE from '../../Resources/class_techer.bmp'
import class_BR from '../../Resources/class_braver.bmp'
import class_BO from '../../Resources/class_bouncer.bmp'
import class_SU from '../../Resources/class_summoner.bmp'
import class_HE from '../../Resources/class_hero.bmp'
import class_PH from '../../Resources/class_phantom.bmp'
import class_ET from '../../Resources/class_etoille.bmp'
import class_LU from '../../Resources/class_luster.bmp'
import mesetaImg from '../../Resources/meseta.bmp';
import rainbowStarImg from '../../Resources/rainbow_star.bmp';

const CLASS_DATA = {
	HU: { icon: class_HU, name: 'Hunter', url:'/guides/hunter' },
	FI: { icon: class_FI, name: 'Fighter', url:'/guides/fighter' },
	RA: { icon: class_RA, name: 'Ranger', url:'/guides/ranger' },
	GU: { icon: class_GU, name: 'Gunner', url:'/guides/gunner' },
	FO: { icon: class_FO, name: 'Force', url:'/guides/force' },
	TE: { icon: class_TE, name: 'Techer', url:'/guides/techer' },
	BR: { icon: class_BR, name: 'Braver', url:'/guides/braver' },
	BO: { icon: class_BO, name: 'Bouncer', url:'/guides/bouncer' },
	SU: { icon: class_SU, name: 'Summoner', url:'/guides/summoner' },
	HE: { icon: class_HE, name: 'Hero', url:'/guides/hero' },
	PH: { icon: class_PH, name: 'Phantom', url:'/guides/phantom' },
	ET: { icon: class_ET, name: 'Etoille', url:'/guides/etoille' },
	LU: { icon: class_LU, name: 'Luster', url:'/guides/luster' },
}

const BEG_GUIDE_DATA = {
	MESETA: { icon: mesetaImg, name: 'Meseta', url:'/guides/meseta'},
	GEAR: { icon: rainbowStarImg, name: 'Gear', url:'/guides/gear'}
}

const HEADER_LIST = {
    Home: {
        title: 'Calendar',
        url: '/'
    },
    About: {
        title: 'About',
        url: '/about'
    },
    ScratchTicket: {
        title: 'AC and SG Scratch Tickets',
        url: '/scratch/ac'
    }
}

export{
    HEADER_LIST,
    CLASS_DATA,
    BEG_GUIDE_DATA
};