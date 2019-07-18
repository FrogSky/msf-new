<template>
    <div class="msf-steps-stepcompany3 msf-steps-stepcompany">
        <!-- <el-upload
          class="avatar-uploader"
          action="http://123.56.217.229:8080/uploadRPicture.msf"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload> -->
        <!-- asdasd -->
        <!-- <input type="file" accept="image/*" ref="fileToUpload" name="fileToUpload" id="fileToUpload" style="opacity: 1" @change="uploadFile"/> -->
        <h2 class="msf-steps-stepcompany3-tit"><var></var>招聘方核实名认证(临时借图站位)</h2>
    
        <!-- <div class="bgs">
            <el-form ref="form" inline :model="form" label-width="0" style="padding: 55px 0 0 104px;">
                <el-form-item>
                    <el-input v-model="form.rname" placeholder="请填写真实姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input style="margin: 15px 0px 0px 202px;" v-model="form.rid" placeholder="请填写"></el-input>
                </el-form-item>
                <el-form-item style="margin-top: -42px" >
                    <el-input v-model="form.sid" placeholder="请填写"></el-input>
                </el-form-item>
            </el-form>
         </div> -->

          <div class="msf-company">
            <el-col :span="11">
              <div class="msf-company-tit-con">
                <div class="msf-company-tit1">上传人员信息</div>
                <div class="msf-company-tit2">填写本人的真实信息，才能通过身份信息</div>
                <div class="msf-company-tit3"><strong>真实姓名</strong><input type="text" v-model="rname" placeholder="请填写真实姓名"></div>
                <div class="msf-company-tit4"><strong>身份证号</strong><input type="text" v-model="rid" placeholder="请填写"></div>
                <div class="msf-company-tit5">
                  <div><img src="../../assets/images/comstep31.png" alt=""></div>
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
                <div class="msf-company-tit4 msf-company-tit44"><strong>统一社会信用代码</strong><input type="text" v-model="rid" placeholder="请填写"></div>
                <div class="msf-company-tit5 msf-company-tit55">
                  <div><img src="../../assets/images/comstep32.png" alt=""></div>
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

      uploadFile () {
      let file = this.$refs.fileToUpload.files[0];
      if (file.size > this.avatarSize) { // 文件大小超出限制
        // ......
      } else {
        let fd = new FormData();
        fd.append('avatar', this.$refs.fileToUpload.files[0]);
 
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('progress', this.uploadProgress, false);
        xhr.addEventListener('load', this.uploadComplete, false);
        xhr.addEventListener('error', this.uploadFailed, false);
        xhr.addEventListener('abort', this.uploadCanceled, false);
        xhr.open('POST', this.avatarUrl);
        xhr.send(fd);
      }
    },
    uploadProgress (evt) {
      console.log('上传中', evt);
    },
    uploadComplete (evt) {
      console.log(evt); // 获取上传成功后返回的结果
    },
    uploadFailed (evt) {
      console.log('上传失败', evt);
    },
    uploadCanceled (evt) {
      alert('上传取消');
    },

        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
        goBack() {
        	this.$router.push({path: './step2'})
        },
        goNext(){
            // this.$router.push({path: './step3'});
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
                        that.$router.push({path: '../homepage'});
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
</style>