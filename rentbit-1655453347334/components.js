function Label({ text, style }) {
  return <Text style={style}> {text}</Text>;
}

export const SEED_DATA = {
  props: {
    label: {
      name: 'Label',
      description: 'My label',
      formType: 'STRING',
      propType: 'STRING',
    },
    onPress: {
      name: 'On Press',
      description: 'What happens when you press',
      formType: 'ACTION',
      propType: 'STRING',
    },
    triggers: ['ON_PRESS'],
  },
};
