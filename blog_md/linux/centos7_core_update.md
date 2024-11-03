```bash
## https://elrepo.org/tiki/HomePage
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
yum install https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm

## https://elrepo.org/tiki/kernel-lt
yum --enablerepo=elrepo-kernel install kernel-lt

## 查看当前默认启动内核
grub2-editenv list
## 查看当前有几个内核
cat /boot/grub2/grub.cfg | grep menuentry
## 更改默认启动内核
grub2-set-default "CentOS Linux (4.4.248-1.el7.elrepo.x86_64) 7 (Core)"
## 修改后查看当前默认启动内核
grub2-editenv list

##EFI 模式
grub2-editenv list
## 更新引导管理器配置
grub2-mkconfig -o /boot/efi/EFI/centos/grub.cfg
## 查看当前有几个内核
cat /boot/efi/EFI/centos/grub.cfg | grep menuentry
## 更改默认启动内核
grub2-set-default "CentOS Linux (4.4.248-1.el7.elrepo.x86_64) 7 (Core)"
## 修改后查看当前默认启动内核
grub2-editenv list

sync
shutdown -r now
```