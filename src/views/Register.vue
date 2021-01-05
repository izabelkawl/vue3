<template>
  <div class="login">
    <div class="login-container">
      <b-row>
        <b-col sm="5" class="image-box" ></b-col>
        <b-col sm="7" class="login-box">
          <h4>REJESTRACJA</h4>
          <b-form>
            <b-row>
              <b-col sm="6">
                <b-form-group label="Imię">
                <b-form-input type="text"></b-form-input>
                </b-form-group>
                <b-form-group label="Nazwa użytkownika">
                <b-form-input type="text"></b-form-input>
                </b-form-group>
                <b-form-group label="Hasło">
                <b-form-input type="password"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="6"><b-form-group label="Nazwisko">
                <b-form-input type="text"></b-form-input>
                </b-form-group>
                <b-form-group label="Adres e-mail">
                <b-form-input type="text"></b-form-input>
                </b-form-group>
                <b-form-group label="Powtórz hasło">
                <b-form-input type="password"></b-form-input>
                </b-form-group></b-col>
            </b-row>
            <b-form-group class="float-right">
              <b-button variant="outline-secondary" >Zarejestruj</b-button>&nbsp;
              <b-button type="submit">Zaloguj</b-button>
            </b-form-group>
          </b-form>
        </b-col>
    </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">

.login{
  margin: 0 auto;
  padding: 120px 50px;
  }
.login-container{
  background:#fff;
  }
.image-box{
    background-image: url('../img/login.jpg');
    background-size: cover;
    height: 60vh;
  }
.login-box{
  padding: 150px 50px;
}
//  .login img{
//     height: 60vh;
//   }
</style>
