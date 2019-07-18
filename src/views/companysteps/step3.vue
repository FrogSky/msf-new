<template>
    <div class="msf-steps-stepcompany3 msf-steps-stepcompany">
        <h2 class="msf-steps-stepcompany3-tit"><var></var>招聘方核实名认证(临时借图站位)</h2>
          <div class="msf-company">
            <el-col :span="11">
              <div class="msf-company-tit-con">
                <div class="msf-company-tit1">上传人招聘员信息</div>
                <div class="msf-company-tit2">填写本人的真实信息，才能通过身份信息</div>
                <div class="msf-company-tit3"><strong>真实姓名</strong><input type="text" v-model="form.rname" placeholder="请填写真实姓名"></div>
                <div class="msf-company-tit4"><strong>身份证号</strong><input type="text" v-model="form.rid" placeholder="请填写"></div>
                <div class="msf-company-tit5">
                  <div><img src="../../assets/images/comstep31.png" alt="">
                    <form method="POST" enctype="multipart/form-data" id="fileUploadForm">
                      <input class="msf-company-tit5-hiddenimg" type="file" name="rPicture"/><br/><br/>
                      <input type="submit" value="Submit" id="btnSubmit"/>
                    </form>
                  </div>
                  <div>
                    <h3 class="msf-company-tit6">上传身份证手持照</h3>
                    <p>请上传<var class="msf-company-tit7">清晰、真实</var>的手持身份证照片</p>
                    <p>并且用<var class="msf-company-tit8">手指遮挡身份证后五位</var></p>
                    <p>GIF、JPEG、PNG格式，大小在3M以内</p>
                  </div>
                </div>
              </div>
          </el-col>
          <el-col :span="1" style="border-right: 1px solid #e5e5e5;height: 100%;">&nbsp;</el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="11">
            <div class="msf-company-tit-con">
                <div class="msf-company-tit1">上传营业执照</div>
                <div class="msf-company-tit2">请上传[xxx公司]的营业执照照片</div>
                <div class="msf-company-tit4 msf-company-tit44"><strong>统一社会信用代码</strong><input type="text" v-model="form.sid" placeholder="请填写"></div>
                <div class="msf-company-tit5 msf-company-tit55">
                  <div><img src="../../assets/images/comstep32.png" alt="">
                      <form method="POST" enctype="multipart/form-data" id="fileUploadForm1">
                        <input class="msf-company-tit5-hiddenimg1" type="file" name="crtPicture"/><br/><br/>
                        <input type="submit" value="Submit" id="btnSubmit1"/>
                      </form>
                  </div>
                  <div>
                    <h3 class="msf-company-tit6">上传营业执照</h3>
                    <p>请确保公司全称与提交认证/审核公司一致</p>
                    <p>如为复印机/黑白扫描件，需加盖公司公章</p>
                    <p>不支持屏幕截图</p>
                    <p>不能有与面试蜂无关的标注或水印</p>
                    <p>不支持电子版营业执照，信息需清晰完整</p>
                  </div>
                </div>
              </div>
          </el-col>
          </div>
         <el-button style="margin: 20px auto;display: block;" type="primary" @click="goNext">提交审核</el-button>
    </div>
</template>
<script>
  $("#btnSubmit").click(function (event) {
        //stop submit the form, we will post it manually.
        event.preventDefault();
        fire_ajax_submit();
  });
  function fire_ajax_submit() {
      // Get form
      var form = $('#fileUploadForm')[0];
      var data = new FormData(form);
      // data.append("CustomField", "This is some extra data, testing");
      $("#btnSubmit").prop("disabled", true);
      $.ajax({
          type: "POST",
          enctype: 'multipart/form-data',
          url: "http://123.56.217.229:8080/uploadRPicture.msf",
          // http://123.56.217.229:8080/uploadCrtPicture.msf
          data: data,
          processData: false, //prevent jQuery from automatically transforming the data into a query string
          contentType: false,
          cache: false,
          timeout: 600000,
          success: function (data) {

          },
          error: function (e) {

          }
      });
  }
  $("#btnSubmit1").click(function (event) {
        event.preventDefault();
        fire_ajax_submit();
  });
  function fire_ajax_submit() {
      // Get form
      var form = $('#fileUploadForm1')[0];
      var data = new FormData(form);
      $("#btnSubmit1").prop("disabled", true);
      $.ajax({
          type: "POST",
          enctype: 'multipart/form-data',
          url: "http://123.56.217.229:8080/uploadCrtPicture.msf",
          // http://123.56.217.229:8080/uploadCrtPicture.msf
          data: data,
          processData: false, //prevent jQuery from automatically transforming the data into a query string
          contentType: false,
          cache: false,
          timeout: 600000,
          success: function (data) {
              // $("#result").text(data);
              // console.log("SUCCESS : ", data);
              // $("#btnSubmit").prop("disabled", false);
          },
          error: function (e) {
              // $("#result").text(e.responseText);
              // console.log("ERROR : ", e);
              // $("#btnSubmit").prop("disabled", false);
          }
      });
  }
export default {
  name: 'headImg',

    data() {
        return {
          avatarUrl: 'http://123.56.217.229:8080/uploadRPicture.msf', // 文件上传路径
          avatarSize: 2097152, // 2M,文件上传大小
            imageUrl: '',
            form: {
                rname: '',
                rid: '',
                sid: '',
            }
        }
    },
    methods: {
        goBack() {
        	this.$router.push({path: './step2'})
        },
        goNext(){
            let that = this;
            $.ajax({
                url:'http://123.56.217.229:8080/companyRegister3.msf',
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    rname:  this.form.rname,  //负责人姓名
                    rid:  this.form.rid,  //id  
                    sid:  this.form.sid,  //企业统一社会信用代码        
                }),
                success:function(res){
                    if (res.msgCode == '0000') {
                        that.$router.push({path: '../jobs/postjobs'});
                    }
                }
            })
        },
    }
}
</script>
<style >
    .bgs{
        height: 400px;
        background: url('../../assets/images/steps-setpcompany3.png') 0 0 no-repeat;
        background-size: 100%;
    }
    .msf-steps-stepcompany3 .el-input .el-input__inner{
        border: none;
        width: 180px;
        height: 20px;
    }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .msf-company-tit5{
    position: relative;
  }
  .msf-company-tit5-hiddenimg{
    position: absolute;
    width: 195px;
    height: 114px;
    background: red;
    top: 28px;
    left: 54px;
    opacity: 0;
    z-index: 10;
    cursor: pointer;
  }
  .msf-company-tit5-hiddenimg1{
    position: absolute;
    width: 195px;
    height: 114px;
    background: red;
    top: 28px;
    left: 54px;
    opacity: 0;
    z-index: 10;
    cursor: pointer;
  }
</style>