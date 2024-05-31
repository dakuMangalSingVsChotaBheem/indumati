import React  from 'react'
import {useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

function Room() {

    const {roomId} = useParams()

    const MymeetingRoom = async (element) =>{
        const appID = 1699335074;
        const serverSecret = "52d3b8d1d159ad2466b64ef770392ff5";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID , serverSecret , roomId , Date.now() ,"Tejas")

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element , 
            sharedLinks: [
                {
                  name: 'Personal link',
                  url:
                   window.location.protocol + '//' + 
                   window.location.host + window.location.pathname +
                    '?roomId=' +
                    roomId,
                },
              ],
            scenario : {
                mode : ZegoUIKitPrebuilt.VideoConference,
            }
        })
    }

    return (
    <div>
        <div ref={MymeetingRoom}/>
    </div>
  )
}

export default Room
