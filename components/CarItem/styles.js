import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
      },
    titles:{
        width: '100%',
        alignItems: 'center',
        marginTop: '30%',
      },
    title:{
        fontSize: 40,
        fontWeight: '500', 
      },
    subtitle:{
        fontSize: 16,
        color: 'gray',
      },
    subtitleCTA : {
        textDecorationLine:'underline',
        
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },  
    buttons: {
        position:'absolute',
        bottom: 40,
        width:'100%'
        
    },
});
export default styles;