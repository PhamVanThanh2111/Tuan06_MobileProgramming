import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DATA = [
  {
    id: '1',
    productName: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'DeVang',
    mall: true,
  },
  {
    id: '2',
    productName: '1KG KHÔ GÀ BƠ TỎI... ',
    shopName: 'LTD Food',
    mall: false,
  },
  {
    id: '3',
    productName: 'Xe cần cẩu đa năng',
    shopName: 'Thế giới đồ chơi',
    mall: false,
  },
  {
    id: '4',
    productName: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi',
    mall: false,
  },
  {
    id: '5',
    productName: 'Lãnh đạo giản đơn',
    shopName: 'Minh Long Book',
    mall: false,
  },
  {
    id: '6',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    mall: false,
  },
  {
    id: '7',
    productName: 'Donal Trump thiên tài lãnh đạo',
    shopName: 'Minh Long Book',
    mall: false,
  },
];

const imageMapper = {
  '1': require('../Images/ca_nau_lau.png'),
  '2': require('../Images/ga_bo_toi.png'),
  '3': require('../Images/xa_can_cau.png'),
  '4': require('../Images/do_choi_dang_mo_hinh.png'),
  '5': require('../Images/lanh_dao_gian_don.png'),
  '6': require('../Images/hieu_long_con_tre.png'),
  '7': require('../Images/trump.png'),
};

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.product, { backgroundColor }]}>
    <View style={{ width: 80, height: 80, flex: 2.5}}>
    <Image style={styles.imgProuct} source={imageMapper[item.id]} />
    </View>
    <View style={{flex: 5}}>
      <Text style={{lineHeight: 21}}>{item.productName}</Text>
      <Text style={{lineHeight: 21}}>{item.shopName}</Text>
    </View>
    <View
      style={{
        width: 100,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2.5,
      }}>
      <TouchableOpacity
        style={{ height: 38, width: 88, backgroundColor: '#F31111'}}>
        <Text style={{ color: 'white', textAlign: 'center', lineHeight: 38}}>Chat</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Screen4_a = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'white' : '#E5E5E5';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.imgArrowLeft}
              source={require('../Images/arrow-left.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ color: 'white', fontSize: 20, lineHeight: 20 }}>
            Chat
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.imgArrowLeft}
              source={require('../Images/cart-check.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.notification}>
        <Text style={{ width: '80%', lineHeight: 16 }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={styles.content}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
  imgArrowLeft: { width: 24, height: 24 },
  topScreen: {
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
  notification: {
    flex: 1.5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  content: {
    flex: 11,
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
    width: '100%',
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'E5E5E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderTopColor: '#C4C4C4',
    borderTopWidth: 1,
  },
  imgProuct: {
    height: 75,
    width: 75,
  },
});

export default Screen4_a;
