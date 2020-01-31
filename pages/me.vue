<template>
   <main>
       
        
            <ul class="acc_items">
               
                <li><a href=""><img src="~static/icons_acc_me/noti.png" alt=""> Notifications</a></li>
                <li><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> Bet Stauts</a></li>
                <li><a href=""><img src="~static/icons_acc_me/lang.png" alt=""> Language</a></li>
                 <li><a href=""><img src="~static/icons_acc_me/refel_icon.png" alt=""> Referral Code</a></li>
                  <li><a href=""><img src="~static/icons_acc_me/logout_icon.png" alt=""> LogOut</a></li>

            </ul>
    
      
    </main>
</template>


<script>
export default {
     layout: 'meLayout',
}
</script>
<style>
    .header {
        background-color :#2A612D;
    }
    .acc_header {
        padding-left:20px;
    }
    .acc_items {
        list-style :none;
        text-align:left;
        margin-top:120px;
        padding:0;
    }
    .acc_items  li {
        padding:10px 0;
        display:block;
    }
    .acc_items li a {
        text-decoration: none;
        color:#fff;
        font-size:16px;
        font-weight:bold;
    }
    .acc_items li a img {
        padding: 0 10px;
        margin-bottom:-11px;
    }
    
</style>