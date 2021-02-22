import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon /> 
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className='sidebar__addChannel' />
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className='sidebar__voiceIcons' fontSize='large' />
                
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src="https://lh3.googleusercontent.com/-oeRDV3AJ4UI/X8ZUgc6_sNI/AAAAAAAAABw/YUFwMZVRR-gYy3hE4ptyQ3kOboQw2VWLQCEwYBhgLKtMDAL1OcqzbPmxmuvCrn8YbyHmxGtr4mUK4Y1bTOue22svqFJp1m0QQ8enqoXlMlLzaHjziWqA-54xTYIee4RnTQSYGwELzLXJooSBU0RxbhPwBDPKl7XwqSi1OQmn5RVpA1hacf0EgCzhHipSOOovQOAHi9HFw-JMDkCbGOAamOBEfgMjLzjC8e13Cx6UxQ_FWfAT1uOOAs3NwjroFrHCjN3Arp9xRnMdkwVAHisSco_mmDykAirMTi746uMF5g7tO1smS5s0e_VsJN66HywG9oeX1ZMr7cxnr8BDqqy0R-MGiVYEHwg3-5kE7pFnlBqkWa1kHlVsujqpEPE9cZ0iJtwdlA_mEURozsup05hNOCgGJHT8-KeLWtL8HwUCBFxgGdxB1cYqA07BmXNF-PMmmCM6FuDKeLRv4KsVs2TcL8PCbJRl4aBE2mYazZd8men1PVh09BTOZV7-BqjrTsZVLeTM7wCXmKaN8dZVdBXTB-YjL-o3A7Hp9Gdw5Z4vw0K9JIJszuBzgpohJiRCl7LSzsWGWx2y5RbDPjMr5_-6qoqDQgHTeAj19ktK_oWaSY2FcSt4dyydnslZDBXtEnDSiC_UPgXqxmlkCJdotQGgFFoo7HaQwl7HPgQY/w280-h280-p/84wNbhcQ_400x400.jpg" />
                
                <div className="sidebar__profileInfo">
                    <h3>@franco_n</h3>
                    <p>#thisIsMyId</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
