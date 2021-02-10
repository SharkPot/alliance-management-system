import ac_bllu from '../../Resources/ac_bllu.bmp';
import ac_dd3 from '../../Resources/ac_dd3.bmp';
import ac_swro from '../../Resources/ac_swro.bmp';
import ac_sip from '../../Resources/ac_sip.bmp';
import ac_idch from '../../Resources/ac_idch.bmp';
import ac_elbe from '../../Resources/ac_elbe.bmp';
import ac_tc2 from '../../Resources/ac_tc2.bmp';
import ac_far from '../../Resources/ac_far.bmp';
import ac_how from '../../Resources/ac_how.bmp';
import ac_ult from '../../Resources/ac_ult.bmp';
import ac_coh from '../../Resources/ac_coh.bmp';
import ac_bb from '../../Resources/ac_bb.bmp';
import ac_dd2 from '../../Resources/ac_dd2.bmp';
import ac_pm from '../../Resources/ac_pm.bmp';
import ac_wew from '../../Resources/ac_wew.bmp';
import ac_tc from '../../Resources/ac_tc.bmp';
import ac_daa from '../../Resources/ac_daa.bmp';
import ac_rf from '../../Resources/ac_rf.bmp';
import ac_lh from '../../Resources/ac_lh.bmp';
import ac_sakm from '../../Resources/ac_sakm.bmp';
import ac_dd from '../../Resources/ac_dd.bmp';
import ac_sk from '../../Resources/ac_sk.bmp';
import ac_ead from '../../Resources/ac_ead.bmp';
import ac_ppd from '../../Resources/ac_ppd.bmp';
import ac_mas from '../../Resources/ac_mas.bmp';
import ac_sev from '../../Resources/ac_sev.bmp';
import ac_sh from '../../Resources/ac_sh.bmp';
import ac_sd from '../../Resources/ac_sd.bmp';
import ac_bw from '../../Resources/ac_bw.bmp';
import ac_chev from '../../Resources/ac_chev.bmp';
import ac_sega from '../../Resources/ac_sega.bmp';
import ac_mil from '../../Resources/ac_mil.bmp';
import ac_orc from '../../Resources/ac_orc.bmp';
import ac_vir from '../../Resources/ac_vir.bmp';
import ac_dro from '../../Resources/ac_dro.bmp';
import ac_cl from '../../Resources/ac_cl.bmp';
import ac_crd from '../../Resources/ac_crd.bmp';
import ac_hrw from '../../Resources/ac_hrw.bmp';
import ac_ul from '../../Resources/ac_ul.bmp';
import ac_rcl from '../../Resources/ac_rcl.bmp';

import fun_mar2020 from '../../Resources/fun_mar2020.bmp';
import fun_apr2020_pt1 from '../../Resources/fun_apr2020_pt1.bmp';
import fun_apr2020_pt2 from '../../Resources/fun_apr2020_pt2.bmp';
import fun_apr2020_pt3 from '../../Resources/fun_apr2020_pt3.bmp';
import fun_may2020_pt1 from '../../Resources/fun_may2020_pt1.bmp';
import fun_may2020_pt2 from '../../Resources/fun_may2020_pt2.bmp';
import fun_may2020_pt3 from '../../Resources/fun_may2020_pt3.bmp';
import fun_jun2020_pt1 from '../../Resources/fun_jun2020_pt1.bmp';
import fun_jun2020_pt2 from '../../Resources/fun_jun2020_pt2.bmp';
import fun_jun2020_pt3 from '../../Resources/fun_jun2020_pt3.bmp';
import fun_jul2020_pt1 from '../../Resources/fun_jul2020_pt1.bmp';
import fun_jul2020_pt2 from '../../Resources/fun_jul2020_pt2.bmp';
import fun_jul2020_pt3 from '../../Resources/fun_jul2020_pt3.bmp';
import fun_aug2020_pt1 from '../../Resources/fun_aug2020_pt1.bmp';
import fun_aug2020_pt2 from '../../Resources/fun_aug2020_pt2.bmp';
import fun_aug2020_pt3 from '../../Resources/fun_aug2020_pt3.bmp';

import sg_veran from '../../Resources/sg_veran.bmp';
import sg_fahe from '../../Resources/sg_fahe.bmp';
import sg_md from '../../Resources/sg_md.bmp';
import sg_asgu from '../../Resources/sg_asgu.bmp';

const SCRATCH_LIST = {
	AC: [
		{ name: 'Blazing Luster', img: ac_bllu, valid: '2/2/2021 - 3/2/2021' ,route:'https://pso2.com/news/scratch-tickets/blazingluster' },
		{ name: 'Designer Dreams III', img: ac_dd3, valid: '1/26/2021 - 2/23/2021' ,route:'https://pso2.com/news/scratch-tickets/designerdreamsIII' },
		{ name: 'Sweet Romance', img: ac_swro, valid: '1/19/2021 - 2/16/2021 ' ,route:'https://pso2.com/news/scratch-tickets/sweetromance' },
		{ name: 'Support Items Pack', img: ac_sip, valid: '1/19/2021 - 2/2/2021' ,route:'https://pso2.com/news/scratch-tickets/supportitemspack0119' },
		{ name: 'Idola Chronicles', img: ac_idch, valid: '1/12/2021 - 2/9/2021 ' ,route:'https://pso2.com/news/scratch-tickets/idolachronicles' },
		{ name: 'Elegant Beginnings', img: ac_elbe, valid: '1/5/2021 - 2/2/2021 ' ,route:'https://pso2.com/news/scratch-tickets/elegantbeginnings' },
		{ name: 'Throwback Collection II', img: ac_tc2, valid: '12/29/2020 - 1/5/2021 ' ,route:'https://pso2.com/news/scratch-tickets/throwbackcollectionII' },
		{ name: 'FRAME ARMS RELOADED', img: ac_far, valid: '12/23/2020 - 1/19/2021 ' ,route:'https://pso2.com/news/scratch-tickets/framearms' },
		{ name: 'Holiday Wonderland ', img: ac_how, valid: '12/15/2020 - 1/12/2021 ' ,route:'https://pso2.com/news/scratch-tickets/holidaywonderland' },
		{ name: 'Ultimate Trinity', img: ac_ult, valid: '12/8/2020 - 1/5/2021 ' ,route:'https://pso2.com/news/scratch-tickets/ultimatetrinity' },
		{ name: 'Corrupted Heroes', img: ac_coh, valid: '11/24/2020 - 12/22/2020 ' ,route:'https://pso2.com/news/scratch-tickets/corruptedheroes' },
		{ name: 'Support Items Pack', img: ac_sip, valid: '11/24/2020 - 12/8/2020 ' ,route:'https://pso2.com/news/scratch-tickets/supportitemspack1124' },
		{ name: 'Blazing Beats', img: ac_bb, valid: '11/18/2020 - 12/16/2020 ' ,route:'https://pso2.com/news/scratch-tickets/blazingbeats' },
		{ name: 'Designer Dreams II ', img: ac_dd2, valid: '11/11/2020 - 12/9/2020 ' ,route:'https://pso2.com/news/scratch-tickets/designerdreams2' },
		{ name: 'Proud Monarch ', img: ac_pm, valid: '11/3/2020 - 12/2/2020 ' ,route:'https://pso2.com/news/scratch-tickets/proudmonarch' },
		{ name: 'Weyland Warriors ', img: ac_wew, valid: '10/28/2020 - 11/25/2020 ' ,route:'https://pso2.com/news/scratch-tickets/weylandwarriors' },
		{ name: 'Throwback Collection ', img: ac_tc, valid: '10/21/2020 - 11/18/2020 ' ,route:'https://pso2.com/news/scratch-tickets/throwbackcollection' },
		{ name: 'Dark Abyss ', img: ac_daa, valid: '10/14/2020 - 11/11/2020 ' ,route:'https://pso2.com/news/scratch-tickets/darkabyss' },
		{ name: 'Royal Fantasy ', img: ac_rf, valid: '10/7/2020 - 11/4/2020 ' ,route:'https://pso2.com/news/scratch-tickets/royalfantasy' },
		{ name: 'Legendary Heroes ', img: ac_lh, valid: '09/30/2020 - 10/28/2020 ' ,route:'https://pso2.com/news/scratch-tickets/legendaryheroes' },
		{ name: 'Sakura Memories ', img: ac_sakm, valid: '9/16/2020 - 10/13/2020 ' ,route:'https://pso2.com/news/scratch-tickets/sakuramemories' },
		{ name: 'Designer Dreams ', img: ac_dd, valid: '9/02/2020 - 9/29/2020 ' ,route:'https://pso2.com/news/scratch-tickets/designerdreams' },
		{ name: 'Star Keeper ', img: ac_sk, valid: '8/26/2020 - 9/22/2020 ' ,route:'https://pso2.com/news/scratch-tickets/starkeeper' },
		{ name: 'Earth Defenders ', img: ac_ead, valid: '8/19/2020 - 9/15/2020 ' ,route:'https://pso2.com/news/scratch-tickets/earthdefenders' },
		{ name: 'Persona Paradox ', img: ac_ppd, valid: '8/12/2020 - 9/08/2020 ' ,route:'https://pso2.com/news/scratch-tickets/personaparadox' },
		{ name: 'Maestro Summoner ', img: ac_mas, valid: '8/5/2020 - 9/1/2020 ' ,route:'https://pso2.com/news/scratch-tickets/maestrosummoner' },
		{ name: 'Seaside Vacation ', img: ac_sev, valid: '7/29/2020 - 8/25/2020 ' ,route:'' },
		{ name: 'Shining Heroes ', img: ac_sh, valid: '7/22/2020 - 8/18/2020 ' ,route:'' },
		{ name: 'Silken Dreams ', img: ac_sd, valid: '7/08/2020 - 8/04/2020 ' ,route:'' },
		{ name: 'Blessed World', img: ac_bw, valid: '7/1/2020 - 7/28/2020 ' ,route:'' },
		{ name: 'Chevalier Line ', img: ac_chev, valid: '6/24/2020 - 7/28/2020 ' ,route:'' },
		{ name: 'SEGA Legacy ', img: ac_sega, valid: '6/10/2020 - 7/14/2020 ' ,route:'' },
		{ name: 'Military Line ', img: ac_mil, valid: '6/2/2020 - 7/8/2020 ' ,route:'' },
		{ name: 'Oracle Celebrations ', img: ac_orc, valid: '5/27/2020 - 6/23/2020 ' ,route:'' },
		{ name: 'Virtual Stars ', img: ac_vir, valid: '5/19/2020 - 6/16/2020 ' ,route:'' },
		{ name: 'Dark Omen ', img: ac_dro, valid: '5/12/2020 - 6/9/2020 ' ,route:'' },
		{ name: 'Career Line ', img: ac_cl, valid: '5/5/2020 - 6/2/2020 ' ,route:'' },
		{ name: 'Crimson Dawn ', img: ac_crd, valid: '4/28/2020 - 5/26/2020 ' ,route:'' },
		{ name: 'Heroic Wanderer ', img: ac_hrw, valid: '4/14/2020 - 5/12/2020 ' ,route:'' },
		{ name: 'Urban Lifestyle ', img: ac_ul, valid: '3/31/2020 - 5/5/2020 ' ,route:'' },
		{ name: 'Recruit Line ', img: ac_rcl, valid: '3/17/2020 - 4/28/2020 ' ,route:'' }

	],
	SG: [
		{ name: 'Versus Annihilation', img: sg_veran, valid: '02/10/2021 - 08/11/2021' ,route:'https://pso2.com/news/scratch-tickets/versusannihilation' },
		{ name: 'Astral Guardians', img: sg_asgu, valid: '12/1/2020 - 5/25/2021 ' ,route:'https://pso2.com/news/scratch-tickets/astralguardians' },
		{ name: "Mother's Disciples", img: sg_md, valid: '9/9/2020 - 3/10/2021 ' ,route:'https://pso2.com/news/announcements/mothersdisciples' },
		{ name: 'Fallen Heroes ', img: sg_fahe, valid: '7/15/2020 - 1/13/2021 ' ,route:'https://pso2.com/news/scratch-tickets/fallenheroes' },
	],
	FUN: [
		{ name: 'March 2020 ', img: fun_mar2020, valid: '3/17/2020 - 3/31/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funmarch2020' },
		{ name: 'April 2020 Part 1 ', img: fun_apr2020_pt1, valid: '3/31/2020 - 4/14/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funapril2020part1' },
		{ name: 'April 2020 Part 2 ', img: fun_apr2020_pt2, valid: '4/14/2020 - 4/28/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funapril2020part2' },
		{ name: 'April 2020 Part 3 ', img: fun_apr2020_pt3, valid: '4/28/2020 - 5/5/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funapril2020part3' },
		{ name: 'May 2020 Part 1 ', img: fun_may2020_pt1, valid: '5/5/2020 - 5/12/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funmay2020part1' },
		{ name: 'May 2020 Part 2 ', img: fun_may2020_pt2, valid: '5/12/2020 - 5/26/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funmay2020part2' },
		{ name: 'May 2020 Part 3 ', img: fun_may2020_pt3, valid: '5/27/2020 - 6/2/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funmay2020part3' },
		{ name: 'June 2020 Part 1 ', img: fun_jun2020_pt1, valid: '6/3/2020 - 6/9/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funjune2020part1' },
		{ name: 'June 2020 Part 2 ', img: fun_jun2020_pt2, valid: '6/10/2020 - 6/23/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funjune2020part2' },
		{ name: 'June 2020 Part 3 ', img: fun_jun2020_pt3, valid: '6/24/2020 - 7/07/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funjune2020part3' },
		{ name: 'July 2020 Part 1 ', img: fun_jul2020_pt1, valid: '7/08/2020 - 7/21/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funjuly2020part1' },
		{ name: 'July 2020 Part 2 ', img: fun_jul2020_pt2, valid: '7/22/2020 - 7/28/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funjuly2020part2' },
		{ name: 'July 2020 Part 3 ', img: fun_jul2020_pt3, valid: '7/29/2020 - 8/04/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funjuly2020part3' },
		{ name: 'August 2020 Part 1 ', img: fun_aug2020_pt1, valid: '8/05/2020 - 8/18/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funaugust2020part1' },
		{ name: 'August 2020 Part 2 ', img: fun_aug2020_pt2, valid: '8/19/2020 - 8/25/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funaugust2020part2' },
		{ name: 'August 2020 Part 3 ', img: fun_aug2020_pt3, valid: '8/26/2020 - 9/01/2020 ' ,route:'https://pso2.com/news/scratch-tickets/funaugust2020part3' },
		{ name: 'Designer Dreams ', img: ac_dd, valid: '9/02/2020 - 9/15/2020 ' ,route:'https://pso2.com/news/scratch-tickets/designerdreams' },
		{ name: 'Sakura Memories ', img: ac_sakm, valid: '9/02/2020 - 9/15/2020 ' ,route:'https://pso2.com/news/scratch-tickets/sakuramemories' },
		{ name: 'Legendary Heroes', img: ac_lh, valid: '09/30/2020 - 10/07/2020' ,route:'https://pso2.com/news/scratch-tickets/legendaryheroes' },
		{ name: 'Royal Fantasy', img: ac_rf, valid: '10/07/2020 - 10/14/2020' ,route:'https://pso2.com/news/scratch-tickets/royalfantasy' },
		{ name: 'Dark Abyss', img: ac_daa, valid: '10/14/2020 - 10/28/2020' ,route:'https://pso2.com/news/scratch-tickets/darkabyss' },
		{ name: 'Weyland Warriors', img: ac_wew, valid: '10/28/2020 - 11/04/2020' ,route:'https://pso2.com/news/scratch-tickets/weylandwarriors' },
		{ name: 'Proud Monarch', img: ac_pm, valid: '11/04/2020 - 11/11/2020' ,route:'https://pso2.com/news/scratch-tickets/proudmonarch' },
		{ name: 'Designer Dreams II', img: ac_dd2, valid: '11/11/2020 - 11/24/2020' ,route:'https://pso2.com/news/scratch-tickets/designerdreams2' },
		{ name: 'Corrupted Heroes', img: ac_coh, valid: '11/25/2020 - 12/09/2020' ,route:'https://pso2.com/news/scratch-tickets/corruptedheroes' },
		{ name: 'Ultimate Trinity', img: ac_ult, valid: '12/09/2020 - 12/16/2020' ,route:'https://pso2.com/news/scratch-tickets/ultimatetrinity' },
		{ name: 'Holiday Wonderland', img: ac_how, valid: '12/16/2020 - 12/23/2020' ,route:'https://pso2.com/news/scratch-tickets/holidaywonderland' },
		{ name: 'Throwback Collection II', img: ac_tc2, valid: '12/30/2020 - 01/06/2021' ,route:'https://pso2.com/news/scratch-tickets/throwbackcollectionII' },
		{ name: 'Elegant Beginnings', img: ac_elbe, valid: '01/06/2021 - 01/13/2021' ,route:'https://pso2.com/news/scratch-tickets/elegantbeginnings' },
		{ name: 'Idola Chronicles', img: ac_idch, valid: '01/13/2021 - 01/20/2021' ,route:'https://pso2.com/news/scratch-tickets/idolachronicles' },
		{ name: 'Sweet Romance', img: ac_swro, valid: '01/20/2021 - 01/27/2020' ,route:'https://pso2.com/news/scratch-tickets/sweetromance' },
		{ name: 'Designer Dreams III', img: ac_dd3, valid: '01/27/2021 - 02/03/2021' ,route:'https://pso2.com/news/scratch-tickets/designerdreamsIII' },
		{ name: 'Blazing Luster', img: ac_bllu, valid: '02/03/2021 - 02/10/2021' ,route:'https://pso2.com/news/scratch-tickets/blazingluster' },
		{ name: 'Versus Annihilation', img: sg_veran, valid: '02/10/2021 - 02/17/2021' ,route:'https://pso2.com/news/scratch-tickets/versusannihilation' },
	]
}

export default SCRATCH_LIST;