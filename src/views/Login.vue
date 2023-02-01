<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col class="login_fields bgwhite">
            <div>
              <a-form>
                <h2>LOGIN</h2>
                <a-form-item
                  label="Email"
                  :labelCol="formItemLayout.labelCol"
                  :wrapperCol="formItemLayout.wrapperCol"
                >
                  <a-input placeholder="Enter Email Address" />
                </a-form-item>
                <a-form-item
                  label="Password"
                  :labelCol="formItemLayout.labelCol"
                  :wrapperCol="formItemLayout.wrapperCol"
                >
                  <a-input placeholder="Enter Password" />
                </a-form-item>
                <a-form-item :wrapperCol="buttonItemLayout.wrapperCol">
                  <a-button type="primary">Login</a-button>
                </a-form-item>
              </a-form>
            </div>
            </v-col>
            <v-col class="login_fields bgoff">
            <div class="logo_div">
              <v-img :src="logo" min-height="100px" min-width="80px"></v-img>
            </div>
            </v-col>
        </v-row>
    </v-container>
  </v-main>
</template>



<script>
import Logo from '../assets/logo.png'
export default {
  name: "AnalyticsVue",
  data() {
    return {
      formLayout: "Veritcal",
      logo : Logo
    };
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "vertical"
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
};
</script>

<style scoped>
@import "../styles/Login.css";
</style>
