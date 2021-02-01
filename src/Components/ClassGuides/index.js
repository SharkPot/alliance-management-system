import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import GUIDE_LIST from './class_guide_setup';

function ClassGuide(props) {
	let location = useLocation();
	let title = '';
	let guideObj = {};
	let guide = [];
    console.log('ClassGuide:location',location);
    // useEffect(() => {
        console.log('ClassGuide:props',props);
        switch(location.pathname){
            case GUIDE_LIST.Hunter.path:
				title = GUIDE_LIST.Hunter.name
				break;
            case GUIDE_LIST.Fighter.path:
				title = GUIDE_LIST.Fighter.name
				break;
            case GUIDE_LIST.Ranger.path:
				title = GUIDE_LIST.Ranger.name
				break;
            case GUIDE_LIST.Gunner.path:
				title = GUIDE_LIST.Gunner.name
				break;
            case GUIDE_LIST.Force.path:
				title = GUIDE_LIST.Force.name
				break;
            case GUIDE_LIST.Techer.path:
				title = GUIDE_LIST.Techer.name
				break;
            case GUIDE_LIST.Braver.path:
				title = GUIDE_LIST.Braver.name
				break;
            case GUIDE_LIST.Bouncer.path:
				title = GUIDE_LIST.Bouncer.name
				break;
            case GUIDE_LIST.Summoner.path:
				title = GUIDE_LIST.Summoner.name
				break;
            case GUIDE_LIST.Hero.path:
				title = GUIDE_LIST.Hero.name
				break;
            case GUIDE_LIST.Phantom.path:
				title = GUIDE_LIST.Phantom.name
				break;
            case GUIDE_LIST.Etoille.path:
				title = GUIDE_LIST.Etoille.name
				break;
            case GUIDE_LIST.Luster.path:
				title = GUIDE_LIST.Luster.name
				break;
		}
		guide = GUIDE_LIST[title].guide;
		console.log('guide',guide);
		props.onRoute('Class guide ' + title)
	// })

    return (
        <div>
            Class guide
			{guide.map((val) =>(
				<div>iframesrc:{JSON.stringify(val)}
            		<iframe src={val.embedUrl} width='100%' height='770px'></iframe>
            	</div>
			))}
            {/* <div>
            	<iframe src="https://docs.google.com/document/d/e/2PACX-1vTh9bKWeowUgXc5UYobcIjsD3LgXSJ0J4qNhRjXeql0Jz5qa9WrtkhMAlzIWNH6vPdmIL1UWCYjg0Zu/pub?embedded=true" width='100%' height='770px'></iframe>
            </div> */}
        </div>
    )
}

export default ClassGuide;