var express = require('express');
var router = express.Router();
var callfile = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('install');
});

router.post('/',function(req,res){

  var masterNode = req.body['master_node'];
  var sshPwd = req.body['ssh_pwd'];
  var nodeNode = req.body['node_node'];
  var virtualIp = req.body['vitrual_ip'];
  var haStrategy = req.body['ha_strategy'];
  var cniStrategy = req.body['cni_strategy'];
  var profixStrategy = req.body['profix_strategy'];
  var kubernetVersion = req.body['version'];

  console.log('master:'+masterNode);
  console.log('SSH:'+sshPwd);
  console.log('node:'+nodeNode);
  console.log('virtual ip:'+virtualIp);
  console.log('HA:'+haStrategy);
  console.log('ser:'+profixStrategy);
  console.log('CNI:'+cniStrategy);
  console.log('Kuber:'+kubernetVersion);
 
  
   
  callfile.execFile('../xx.sh',['-m',masterNode,'-n',nodeNode,'-p',sshPwd,'-a',haStrategy],function(err,stdout,stderr){
    if(err){
      console.log('error');
    //  console.log(stderr);
    }else{
      console.log('success');
     // console.log(stdout);
    }        
  });
});


module.exports = router;
