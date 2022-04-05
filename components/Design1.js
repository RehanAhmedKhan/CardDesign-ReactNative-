import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const radius = 30;
const Design1 = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.cardContainer}>
        <ImageBackground
          imageStyle={{
            borderTopRightRadius: radius,
            borderTopLeftRadius: radius,
          }}
          source={require('../assets/meal-2.jpg')}
          style={styles.image}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.freeDeliveryView}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  textTransform: 'uppercase',
                }}>
                Free Delivery
              </Text>
            </View>
            <View style={styles.heartLogo}>
              <MaterialCommunityIcons
                size={20}
                name="cards-heart-outline"
                color={'#000'}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text}>Chit Chaat Gulberg</Text>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              size={30}
              name="star"
              color={'#fd391e'}
              style={{marginTop: 8, marginRight: 5}}
            />
            <Text style={styles.rating}>5.0</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.time}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
              34 mins
            </Text>
          </View>
          <View style={styles.delivery}>
            <Text style={{color: '#8c8c8c', fontSize: 18, letterSpacing: 1}}>
              Free Delivery
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    // margin: 25,
  },
  cardContainer: {
    // width: windowWidth - 25,
    backgroundColor: '#fff',
    // marginTop: 30,
    height: 300,
    borderRadius: radius,
    elevation: 6,
    // shadowColor: 'purple',
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // },
    // shadowOpacity: 0.75,
  },
  image: {
    width: windowWidth - 25,
    height: 185,
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    letterSpacing: 1,
    marginLeft: 14,
    marginTop: 10,
  },
  rating: {
    fontSize: 20,
    color: '#8c8c8c',
    fontWeight: '400',
    marginRight: 14,
    marginTop: 10,
  },
  time: {
    width: '24%',
    height: 40,
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    marginLeft: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  delivery: {
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  freeDeliveryView: {
    width: '40%',
    height: 40,
    backgroundColor: '#FE5002',
    borderRadius: 20,
    marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 18,
  },
  heartLogo: {
    width: '11%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 18,
  },
});

export default Design1;
