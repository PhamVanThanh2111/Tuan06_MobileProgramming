import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  Icon,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DATA = [
  {
    id: '1',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.0,
    reviews: 15,
  },
  {
    id: '2',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.0,
    reviews: 15,
  },
  {
    id: '3',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.0,
    reviews: 15,
  },
  {
    id: '4',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.0,
    reviews: 15,
  },
  {
    id: '5',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.0,
    reviews: 15,
  },
  {
    id: '6',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4.0,
    reviews: 15,
  },
];

const imageMapper = {
  1: require('../Images/giacchuyen1.png'),
  2: require('../Images/daynguon1.png'),
  3: require('../Images/dauchuyendoipsps21.png'),
  4: require('../Images/dauchuyendoi1.png'),
  5: require('../Images/carbusbtops21.png'),
  6: require('../Images/daucam1.png'),
};

const ProductItem = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.product, { backgroundColor }]}>
    <View style={styles.itemContainer}>
      <Image source={imageMapper[item.id]} style={styles.productImage} />
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productDiscount}>{item.discount}</Text>
      <Text style={styles.productRating}>
        ★★★★ {item.rating} ({item.reviews})
      </Text>
    </View>
  </TouchableOpacity>
);

const Screen4_b = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require('../Images/arrow-left.png')}
          />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../Images/search.png')}
          />
          <TextInput
            placeholder="Dây cáp USB"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require('../Images/cart-check.png')}
          />
          <View style={styles.cartBadge} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <ProductItem item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.gridContainer}
          />
        </SafeAreaView>
      </View>
      <View style={styles.bottomScreen}>
        <View>
          <Image
            style={styles.imgNavigation}
            source={require('../Images/recent.png')}
          />
        </View>
        <View>
          <Image
            style={styles.imgNavigation}
            source={require('../Images/home.png')}
          />
        </View>
        <View>
          <Image
            style={styles.imgNavigation}
            source={require('../Images/back.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0082FF', // Màu xanh header
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButton: {
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  cartButton: {
    marginLeft: 10,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 12,
    height: 12,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  content: {
    flex: 11,
    width: '100%',
  },
  gridContainer: {
    padding: 1,
    width: '100%',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 110,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDiscount: {
    fontSize: 12,
    color: 'gray',
  },
  productRating: {
    fontSize: 12,
    color: '#FFD700', // Màu vàng cho ngôi sao
  },
  imgNavigation: {
    height: 24,
    width: 24,
  },
  bottomScreen: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    width: '100%',
    height: 42,
    flex: 1,
  },
  product: {
    width: '50%',
  },
});

export default Screen4_b;
