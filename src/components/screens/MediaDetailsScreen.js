import MediaContainer from "../containers/MediaContainer";
import { useLayoutEffect } from 'react';

const MediaDetailsScreen = ({ navigation, route }) => {

  /* 
   * Clearing the default title "MediaDetails" using useLayoutEffect. 
   * It's probably more appropriate to get the title from the media details fetched in MediaContainer
   * and get it reflected here, but then probably the easiest way would be to just have the title 
   * obtained in the list screen to be included in the route params 
   * - which is not allowed for this particular exercise...
   * so for now I am just clearing the title here. 
   */
  useLayoutEffect(() => {
    navigation.setOptions({ title: '' });
  }, []);

  return <MediaContainer navigation={navigation} route={route} />

};

export default MediaDetailsScreen;
