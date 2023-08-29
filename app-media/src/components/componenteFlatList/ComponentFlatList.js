import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import FormMedia from './FormMedia';
import ViewResult from './ViewResult';

const ComponentFlatList = () => {
  const [media, setMedia] = useState('');

  const data = [
    { id: 'form', component: <FormMedia setMedia={setMedia} /> },
    { id: 'result', component: <ViewResult media={media} /> },
  ];

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>{item.component}</View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ComponentFlatList;
