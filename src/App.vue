<script>
  </script>
  
  <template>
    <header class="wrapper">
      <div class="navbar">
  
        <nav>
          <RouterLink to="/">Usines</RouterLink>
          <RouterLink to="/market">Marché</RouterLink>
          <RouterLink to="/storage">Entrepôt</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </template>
  
  <style scoped>
    .wrapper{
      background-color: #6e4747;
      color: #fff;
      height: 90px;
    }
    .navbar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      width: 50%;
      color: white;
    }
    a{
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      padding-bottom: -1rem;
      font-size: 40px;
    }
  </style>
  