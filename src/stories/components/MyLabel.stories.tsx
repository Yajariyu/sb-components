import { MyLabel } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title : 'UI/Etiquetas/MyLabel',
    component : MyLabel,
    argTypes : {
        size : { control :"select", options : ['normal', 'h1' , 'h2']},
        color : { control :"select"},
        fontColor : {control:'color'}
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    size:'normal',
    allCaps: false
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size:'normal',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args = {
    size:'normal',
    color: 'secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args = {
    size:'normal',
    color: 'tertiary'
}

//CustomFontColor
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size:'normal',
    fontColor: '#5517ac'
}


//CustomFontColor
export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size:'normal',
    fontColor: '#eeeeee',
    backgroundColor: '#000000'
}