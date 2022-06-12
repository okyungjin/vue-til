<template>
  <div>
    <header>
      <router-link to="/login">로그인</router-link> |
      <router-link to="/sign-up">회원가입</router-link>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>
