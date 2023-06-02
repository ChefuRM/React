import React, { useState } from 'react'
import { View, TouchableOpacity, Text, FlatList, Modal } from 'react-native'
import { palette } from '../../Config/theme'

interface DropdownButtonProps {
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ options, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleSelectOption = (option: string) => {
    setModalVisible(false)
    onSelect(option)
  }

  const renderOption = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity onPress={() => handleSelectOption(item)}>
        <Text style={{
          backgroundColor: palette.complementary1,
          padding: 10,
          borderRadius: 13,
          margin: 10
        }}
        >{item}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)} style={{
          backgroundColor: palette.complementary1,
          padding: 10,
          borderRadius: 13,
          margin: 10
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Abrir Menú</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 13,
          margin: 10,
          backgroundColor: 'rgba(245,245, 220, 0.5)'
        }}
        >
          <FlatList
            style={{ width: '100%' }}
            data={options}
            renderItem={renderOption}
            keyExtractor={(item) => item}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(false)} style={{
              backgroundColor: palette.complementary1,
              padding: 10,
              borderRadius: 13,
              margin: 10
            }}
          >
            <Text style={{ color: 'black' }}>Cerrar Menú</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default DropdownButton
