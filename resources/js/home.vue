<template >
    <div >
        <div class="row">
            <div class="header-user" style=" text-align : left;" >
                <div style="display:flex">
                    <div style="margin-left : 30px; margin-right : 5px; font-size: 20pt; color :red">
                        <i class="el-icon-shopping-cart-full"></i>
                    </div>
                    <div>
                        0 Item <br>
                        0 IDR
                    </div>
                </div>
            </div>
            <div class="header-user">
                <div style="display: flex">
                    <div>
                        <img src="img/mobil.jpeg" style="width:80px; height: 40px; padding : 5px"  >
                    </div>
                    <div style="margin-left: 7px;">
                        <div>
                            <b>Avega</b>
                        </div>
                        <div>
                            E1234AB
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product text-center">
             <b> Layanan Kami ! </b>
            <br>

            <div class="flex-container">
              <div class="menu-service"> 
                <div class="icon-menu">
                  <i class="el-icon-service"></i>  
                </div>
                <div>Service</div> 
              </div>
              <div class="menu-service"> 
                <div class="icon-menu">
                  <i class="el-icon-truck "></i>  
                </div>
                <div>Perawatan</div> 
              </div>
              <div class="menu-service"> 
                <div class="icon-menu">
                  <i class="el-icon-setting"></i>  
                </div>
                <div>Tune Up</div> 
              </div>
              <div class="menu-service"> 
                <div class="icon-menu">
                  <i class="el-icon-more"></i>  
                </div>
                <div>Lainnya</div> 
              </div>
            </div>
        </div>

        <div class="row">
            <div style="padding: 15px 0px 0px 15px; width: 50%"><b>Promo Khusus</b> </div>
            <div style="padding: 15px 15px 0px 0px; width: 50%; text-align : right">
                <a href="#">
                    lihat semua
                </a>
            </div>
        </div>
        <div class="promo ">
            <div class="img-promo">
                <a href="https://api.whatsapp.com/send?phone=6285797540815&text=Halo%20mau%20order%20gan">
                <img src="img/promo1.jpeg" >
                </a>
            </div>
            <div class="img-promo">
                <a href="https://api.whatsapp.com/send?phone=6285797540815&text=Halo%20mau%20order%20gan">
                <img src="img/promo2.jpeg" >
                </a>
            </div>
            <div class="img-promo">
                <a href="https://api.whatsapp.com/send?phone=6285797540815&text=Halo%20mau%20order%20gan">
                <img src="img/promo3.jpeg" >
                </a>
            </div>
            <div class="img-promo">
                <a href="https://api.whatsapp.com/send?phone=6285797540815&text=Halo%20mau%20order%20gan">
                <img src="img/promo4.jpeg" >
                </a>
            </div>
        </div>

        <div style="margin-top : 20px;">
            <b>
                Males Keluar rumah atau mogok di jalan?
            </b>
            <br> Kami Siap jemput dimana pun anda berada
            <a href="https://api.whatsapp.com/send?phone=6285797540815&text=Halo%20mau%20order%20gan">
                <img src="img/jemput.jpg" style="width: 100%">
            </a>
        </div>
        
        <div class="row">
            <div style="padding: 15px 0px 0px 15px; width: 50%"><b>Layanan Kami</b> </div>
        </div>
        <div class="blog ">
            <div class="img-blog">
                <img src="img/service1.jpg" >
                lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
            </div>
            <div class="img-blog">
                <img src="img/service2.jpg" >
                lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum
            </div>
        </div>
        
        <br>
        <br>
        <br>
        <br>


    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header-user {
        width: 50%;
        border-bottom : 3px solid red ;
    }

    .product {
        margin-top: 10px ;
        text-align: center;
        width: 100% ;
        background: crimson;
        border-radius: 5px;
    }

    .promo {
        display: flex;
        overflow-x: auto;
        width: 100%;
        margin-top: 10px;

    }

    .promo::-webkit-scrollbar{
        display: none;
    }

    .promo {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .img-promo {
        flex: 0 0 70%;
        border-radius: 5px; 
        margin-right: 10px;  
    }

    .promo img {
        width: 100%;
        border-radius: 5px;
    }

    .menu-service {
        width: 25% ;
        margin: 5px;
        text-align: center;
        color: white;
    }
    

    .blog {
        display: flex;
        overflow-x: auto;
        width: 100%;
        margin-top: 10px;

    }

    .blog::-webkit-scrollbar{
        display: none;
    }

    .blog {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .img-blog {
        flex: 0 0 70%;
        border-radius: 5px; 
        margin-right: 10px;  
    }

    .blog img {
        width: 100%;
        height: 120px;
        border-radius: 5px;
    }

    
</style>