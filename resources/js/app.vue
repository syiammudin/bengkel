<template>
    <div >
      <div style="max-width:650px; margin : auto ;">
        <div class="header">
          <h4> <i class="el-icon-setting"></i>  My Bengkel</h4>
        </div>
          <!-- header -->
          <div class="container" style="margin-top: 50px;">
              <transition name="scale" mode="out-in">
              <router-view ></router-view>
              </transition>
          </div>
         <div class="footer">
            <div class="flex-container">
              <div class="menu-footer"> 
                <div class="icon-menu">
                  <i class="el-icon-s-home"></i>  
                </div>
                <div>Menu</div> 
              </div>
              <div class="menu-footer"> 
                <div class="icon-menu">
                  <i class="el-icon-s-order "></i>  
                </div>
                <div>Pesanan</div> 
              </div>
              <div class="menu-footer"> 
                <div class="icon-menu">
                  <i class="el-icon-notebook-2"></i>  
                </div>
                <div>Riwayat</div> 
              </div>
              <div class="menu-footer"> 
                <div class="icon-menu">
                  <i class="el-icon-chat-line-round"></i>  
                </div>
                <div>Chat</div> 
              </div>
              <div class="menu-footer"> 
                <div class="icon-menu">
                  <i class="el-icon-user "></i>  
                </div>
                <div>Akun</div> 
              </div>
            </div>
         </div>
      </div>
          
    </div>
</template>
<script>
export default {

}
</script>
<style >
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}


.footer {
   position: fixed;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
   max-width: 650px;
}



.header {
  margin: auto;
  max-width: 650px;
  width: 100%;
  text-align: center;
  padding: 5px 5px;
  background: red;
  color: #f1f1f1;
  position: fixed;
  top: 0;

}

.flex-container {
  display: flex;
  flex-wrap: nowrap;
}

.menu-footer {
  padding:5px;
  text-align: center;
  width: 20%;
}

.icon-menu{
  font-size: 20pt;
  color : white ;
  margin-bottom: -10px !important;
}


</style>