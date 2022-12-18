import Video from 'react-native-video';
import { StyleSheet, View } from 'react-native';

const VideoBackground = ({video}) => {
        
    return (
        <Video
            source={video}
            paused={false}
            repeat={true}
            muted={true}
            resizeMode="cover"
            style={styles.backgroundVideo}   
        />   
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        height: '100%',
        opacity: 0.50,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    }
});

export default VideoBackground;