import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#DA251D',
        secondary: '#78352A',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2DA6A6',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});