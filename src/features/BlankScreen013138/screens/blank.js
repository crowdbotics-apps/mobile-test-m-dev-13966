import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_4: "",
    TextInput_5: "",
    DateTimePicker_6: new Date(""),
    TextInput_7: "",
    CheckBox_10: true,
    CheckBox_12: true,
    Switch_35: true
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <DateTimePicker
        date={this.state.DateTimePicker_6}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_6: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_7}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_10}
        onPress={nextChecked => this.setState({ CheckBox_10: nextChecked })}
      />
      <Icon name="star" />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_12}
        onPress={nextChecked => this.setState({ CheckBox_12: nextChecked })}
      />
      <Switch
        value={this.state.Switch_35}
        onValueChange={nextChecked => this.setState({ Switch_35: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  DateTimePicker_6: {},
  TextInput_7: {},
  Image_8: { width: 750 },
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  DateTimePicker_6: {},
  TextInput_7: { height: 100 },
  Slider_9: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  DateTimePicker_6: {},
  TextInput_7: { height: 100 },
  Slider_9: {},
  CheckBox_10: {},
  Icon_11: {},
  CheckBox_12: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  DateTimePicker_6: {},
  TextInput_7: { height: 100 },
  Slider_9: {},
  CheckBox_10: {},
  Icon_11: {},
  CheckBox_12: {},
  Switch_35: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  DateTimePicker_6: {},
  TextInput_7: { height: 100 },
  Slider_9: {},
  CheckBox_10: {},
  Icon_11: {},
  CheckBox_12: {},
  Switch_35: {}
})
