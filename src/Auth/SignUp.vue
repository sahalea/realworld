<template>
  <div class="container">
    <div class="flex items-center justify-center">
      <div class="text-center w-96">
        <h1 class="text-center mb-4 text-4xl font-medium">Sign up</h1>
        <router-link to="/signin" class="sub-text">Have an account?</router-link>
        <el-form ref="form" :model="userDetails" :rules="formRules" class="form mt-4">
          <div class="column">
            <el-form-item prop="username">
              <el-input v-model="userDetails.username" placeholder="username" />
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="userDetails.email" placeholder="email" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="userDetails.password" placeholder="password" />
            </el-form-item>
            <el-form-item class="text-right">
              <el-button type="success" @click="submitData()">Sign up</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup(props) {
    const required = (field, callback) => {
      if (userDetails.value[field]) {
        callback();
      } else {
        callback(new Error(`${field} is mandatory`));
      }
    };

    const emailvalidator = callback => {
      if (userDetails.value["email"]) {
        callback();
      } else {
        callback(new Error(`Enter valid email`));
      }
    };

    const form = ref();
    const userDetails = ref({});
    const formRules = {
      username: [
        {
          validator: (rule, value, callback) => {
            required("username", callback);
          },
          trigger: "blur"
        }
      ],
      email: [
        {
          validator: (rule, value, callback) => {
            required("email", callback);
            emailvalidator(callback);
          },
          trigger: "blur"
        }
      ],
      password: [
        {
          validator: (rule, value, callback) => {
            required("password", callback);
          },
          trigger: "blur"
        }
      ]
    };

    return {
      form,
      userDetails,
      formRules
    };
  },

  methods: {
    submitData() {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          const response = await this.$httpPost("/users", this.userDetails);
        }
      });
    }
  }
});
</script>
