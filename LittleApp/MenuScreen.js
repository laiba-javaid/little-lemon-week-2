import React from 'react';
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
];

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const MenuItems = () => {
    const renderItem = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );
  return (
    <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}></SectionList>
          );
};

const menuStyles = StyleSheet.create({
            container: {
              flex: 0.95,
            },
            innerContainer: {
              paddingHorizontal: 40,
              paddingVertical: 20,
              backgroundColor: '#333333',
            },
            sectionHeader: {
              backgroundColor: '#607D3B',
              color: '#333333',
              fontSize: 34,
              flexWrap: 'wrap',
              textAlign: 'center',
              color: 'white',
              
            },
            itemText: {
              color: '#F4CE14',
              fontSize: 20,
            },
            separator: {
              borderBottomWidth: 1,
              borderColor: '#EDEFEE',
            },
            footerText: {
              color: 'black',
              fontSize: 15,
              flexWrap: 'wrap',
              textAlign: 'center',
              backgroundColor:'#8FC647',
              fontStyle: 'italic',
            },
            button: {
              fontSize: 22,
              padding: 10,
              marginVertical: 8,
              margin: 40,
              backgroundColor: '#EDEFEE',
              borderColor: '#EDEFEE',
              borderWidth: 2,
              borderRadius: 12
            },
            buttonText: {
              color: '#333333',
              textAlign: 'center',
              fontSize: 32,
            },
            infoSection: {
              fontSize: 24,
              padding: 20,
              marginVertical: 8,
              color: '#EDEFEE',
              textAlign: 'center',
              backgroundColor: '#495E57',
            },
          });
          
          export default MenuItems;
          
          
          