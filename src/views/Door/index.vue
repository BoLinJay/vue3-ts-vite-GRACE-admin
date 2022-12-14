<script setup lang="ts">
import { userLogin } from '@/api/user';
import { reactive, ref } from 'vue';
import loadingButton from '@/components/LoadingButton/index.vue'
import { setToken } from '@/utils/enum';
import { Form, Field, ErrorMessage } from 'vee-validate'
import veeSchema from '@/utils/vee-validate-schema'
import _ from 'lodash'
import Message from '@/components/Message/Message';
import { useRouter } from 'vue-router';
// 登录注册控制
const isSignUpOrSignIn = ref(false)
const toSignUp = () => {
    isSignUpOrSignIn.value = true
}
const toSignIn = () => {
    isSignUpOrSignIn.value = false
}
// 用户信息
const userInfo = reactive({
    username: 'admin',
    password: '123456'
})
// 验证规则
const mySchema = {
    username: veeSchema.username,
    password: veeSchema.password,
}
// loading
const loadingRef = ref(false)
const router = useRouter()
const signIn = _.debounce(async () => {
    loadingRef.value = true
    try {
        const res = await userLogin(userInfo)
        console.log(res);
        res.data && setToken(res.data.token)
        setTimeout(() => {
            loadingRef.value = false
            router.push('/')
        }, 2000);
        Message({ type: 'success', text: '登录成功，欢迎回来！' })
    } catch (error) {
        console.log(error);
        Message({ type: 'error', text: '登录失败，请重新登录' })
    } finally {
        setTimeout(() => {
            loadingRef.value = false
        }, 2000);
    }
}, 250, {
    'leading': true,
    'trailing': false
})
</script>
<template>
    <div class="container" :class="{'sign-up-mode': isSignUpOrSignIn }">
        <div class="forms-container">
            <div class="signin-signup">
                <Form action="#" class="sign-in-form" :validation-schema="mySchema" autocomplete="off"
                    v-slot="{errors}">
                    <h2 class="title">用户登录</h2>
                    <div class="input-field border" :class="{'error':errors.username}">
                        <i>
                            <i-mdi:account />
                        </i>
                        <Field name="username" type="text" placeholder="Username" v-model="userInfo.username" />
                    </div>
                    <ErrorMessage name="username" />
                    <div class="input-field" :class="{'error':errors.password}">
                        <i>
                            <i-material-symbols:lock-sharp />
                        </i>
                        <Field name="password" type="password" placeholder="Password" v-model="userInfo.password" />
                    </div>
                    <ErrorMessage name="password" />
                    <loadingButton @click="signIn" :loading="loadingRef" :errors="errors">登录</loadingButton>
                    <p class="social-text"></p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i>
                                <i-uiw:qq />
                            </i>
                        </a>
                        <a href="#" class="social-icon">
                            <i>
                                <i-uiw:apple />
                            </i>
                        </a>
                        <a href="#" class="social-icon">
                            <i>
                                <i-uiw:aliwangwang />
                            </i>
                        </a>
                        <a href="#" class="social-icon">
                            <i>
                                <i-uiw:android />
                            </i>
                        </a>
                    </div>
                </Form>
                <form action="#" class="sign-up-form">
                    <h2 class="title">用户注册</h2>
                    <div class="input-field">
                        <i>
                            <i-mdi:account />
                        </i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="input-field">
                        <i>
                            <i-ic:sharp-email />
                        </i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div class="input-field">
                        <i>
                            <i-material-symbols:lock-sharp />
                        </i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button type="button" class="btn ">注册</button>
                    <p class="social-text"></p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i>
                                <i-uiw:qq />
                            </i>
                        </a>
                        <a href="#" class="social-icon">
                            <i>
                                <i-uiw:apple />
                            </i>
                        </a>
                        <a href="#" class="social-icon">
                            <i>
                                <i-uiw:aliwangwang />
                            </i>
                        </a>
                        <a href="#" class="social-icon">
                            <i>
                                <i-uiw:android />
                            </i>
                        </a>
                    </div>
                </form>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>New here ?</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                        ex ratione. Aliquid!
                    </p>
                    <button type="button" class="btn transparent" id="sign-up-btn" @click="toSignUp">
                        注册页
                    </button>
                </div>
                <img src="./img/log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>One of us ?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        laboriosam ad deleniti.
                    </p>
                    <button type="button" class="btn transparent" id="sign-in-btn" @click="toSignIn">
                        登录页
                    </button>
                </div>
                <img src="./img/register.svg" class="image" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
input {
    font-family: "Poppins", sans-serif;
}

.error {
    border: 1.5px solid red;
}

.btn {
    width: 150px;
    background-color: #5995fd;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;


}

.btn:hover {
    background-color: #4d84e2;
}

.container {
    position: relative;
    width: 100%;
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;
}

.forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.signin-signup {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0rem 5rem;
    transition: all 0.2s 0.7s;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

form.sign-up-form {
    opacity: 0;
    z-index: 1;
}

form.sign-in-form {
    z-index: 2;
}

.title {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
}

.input-field {
    max-width: 380px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 10px 0;
    height: 55px;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
    position: relative;
}

.input-field i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 2.0rem;
    transform: translate(10px, 10px)
}

.input-field input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
}

.input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
}

.social-text {
    padding: 0.7rem 0;
    font-size: 1rem;
}

.social-media {
    display: flex;
    justify-content: center;
}

.social-icon {
    height: 46px;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.45rem;
    color: #333;
    border-radius: 50%;
    border: 1px solid #333;
    text-decoration: none;
    font-size: 1.2rem;
    transition: 0.3s;
}

.social-icon:hover {
    color: #4481eb;
    border-color: #4481eb;
}



.panels-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.container:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
}

.image {
    width: 100%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
}

.panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 6;
}

.left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
}

.right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
}

.panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
}

.panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
}

.panel p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
}

.btn.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
    transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
    left: 25%;
}

.container.sign-up-mode form.sign-up-form {
    opacity: 1;
    z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
    opacity: 0;
    z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
    transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
    pointer-events: none;
}

.container.sign-up-mode .right-panel {
    pointer-events: all;
}

@media (max-width: 870px) {
    .container {
        min-height: 800px;
        height: 100vh;
    }

    .signin-signup {
        width: 100%;
        top: 95%;
        transform: translate(-50%, -100%);
        transition: 1s 0.8s ease-in-out;
    }

    .signin-signup,
    .container.sign-up-mode .signin-signup {
        left: 50%;
    }

    .panels-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr 1fr;
    }

    .panel {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2.5rem 8%;
        grid-column: 1 / 2;
    }

    .right-panel {
        grid-row: 3 / 4;
    }

    .left-panel {
        grid-row: 1 / 2;
    }

    .image {
        width: 200px;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.6s;
    }

    .panel .content {
        padding-right: 15%;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.8s;
    }

    .panel h3 {
        font-size: 1.2rem;
    }

    .panel p {
        font-size: 0.7rem;
        padding: 0.5rem 0;
    }

    .btn.transparent {
        width: 110px;
        height: 35px;
        font-size: 0.7rem;
    }

    .container:before {
        width: 1500px;
        height: 1500px;
        transform: translateX(-50%);
        left: 30%;
        bottom: 68%;
        right: initial;
        top: initial;
        transition: 2s ease-in-out;
    }

    .container.sign-up-mode:before {
        transform: translate(-50%, 100%);
        bottom: 32%;
        right: initial;
    }

    .container.sign-up-mode .left-panel .image,
    .container.sign-up-mode .left-panel .content {
        transform: translateY(-300px);
    }

    .container.sign-up-mode .right-panel .image,
    .container.sign-up-mode .right-panel .content {
        transform: translateY(0px);
    }

    .right-panel .image,
    .right-panel .content {
        transform: translateY(300px);
    }

    .container.sign-up-mode .signin-signup {
        top: 5%;
        transform: translate(-50%, 0);
    }
}

@media (max-width: 570px) {
    form {
        padding: 0 1.5rem;
    }

    .image {
        display: none;
    }

    .panel .content {
        padding: 0.5rem 1rem;
    }

    .container {
        padding: 1.5rem;
    }

    .container:before {
        bottom: 72%;
        left: 50%;
    }

    .container.sign-up-mode:before {
        bottom: 28%;
        left: 50%;
    }
}
</style>