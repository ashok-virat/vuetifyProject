import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import AppNav from './components/AppNavbar.vue';
  import AppAssetsDetails from './components/AppAssetsDetails.vue'

   setInteractionMode('eager')

   extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })
  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })
  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })
    extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })
  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

export default {
  name: 'App',
      components: {
      ValidationProvider,
      ValidationObserver,
      AppNav,
      AppAssetsDetails
    },
 data () {
      return {
        valid: true,
      name: '',
      description: '',
      status: '',
      version: '',
      select: null,
      edit:false,
      editableDataIndex: -1,
      dropdownItems: [
        { title: 'Delete' },
          { title: 'Edit' },
      ],
      items: [
        'Training Completed',
        'Published'
      ],
      checkbox: null,
         dialog: false,
        search: '',
           tab: null,
        text: <template><h1>gi</h1></template>,
         messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify!',
          excerpt: 'Thank you for joining our community...',
        },
        {
          color: 'red',
          icon: 'mdi-account-multiple',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter',
        }
      ],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            description : 'Lorem Ipsum is simply dummy text of the printing',
            status: 'training completed',
            version: 10 ,
            modifiedAt: '04/12/2222, 3:00 PM',
            modifiedby: 'ashok',
          },
        ],
      }
    },
        methods: {
          deleteItem: function(index) {
            this.desserts.splice(index,1)
          },
          editItem : function(index,data) {
            this.editableDataIndex = index
            this.edit = true
            this.name = data.name
            this.description = data.description
            this.status = data.status
            this.version = data.version
            this.dialog = true
          },
      submit () {
        this.$refs.observer.validate()
        console.log(this.name,this.description,this.status,this.version)
        let newAsset= {
          name: this.name,
          description: this.description,
          status: this.status,
          version: this.version,
            modifiedAt: '04/12/2222, 3:07 PM',
            modifiedby: 'ashok',
        }
        if(!this.edit) {
        this.desserts.push(newAsset);
        } else {
          this.desserts.splice(this.editableDataIndex,1,newAsset)
        }
        this.$refs.form.reset()
          this.$refs.observer.reset()
        this.dialog = false
        this.edit = false
        this.editableDataIndex = -1
      },
      clear () {
        this.$refs.form.reset()
        this.$refs.observer.reset()
        this.dialog = false
      },
    },
};