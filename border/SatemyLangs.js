var global= new Object;
global.langs=new Array;
global.noncom="[�ѧ�����������]";
global.categoryName=new Array("ൻԯ� - ͯڰ��� - �ա�","ൻԯ��","ͯڰ���","�ա�" ,"�Թ�šڢ��","�صڵ�ڵšڢ��","��Ը���šڢ��","ͭڭ����","����ûԮ���","��ö�����","�ա���");
//������ѡ
	global.langs["deIntroduction"]	="<div align=center><b>:: �ط� ::</b></div>��Ҩ����������ԧ�ԡ�ҹ� ����������֡�֧����� \"�ط�\"<img src=images/emoticon200.gif >";
	global.langs["Home"]	="��������";
	global.langs["deHome"]	="<div align=center><b>:: ����� : �������� ::</b></div>� �˹���á�ͧ�����. <br>� ��� ����� ������� �ػ���. ";
	global.langs["ArrayIndex"]	="͹ء��";
	global.langs["deArrayIndex"]	="<div align=center><b>:: ����� : ͹ء�� ::</b></div>�  ��úѭ����ûԮ�, ���ҹء�� - �ط�����, ���ҹء�� - ���Ѿ��, ��ҹء�� - �ӴѺ��.<br>� ��� ��ڶ��� �ҹҹء��� ����ʶ.";
	global.langs["Search"]	="�鹾���ûԮ�";
	global.langs["SearchSatemy"]	="����� : �鹾���ûԮ�";
	global.langs["deSearch"]	="<div align=center><b>:: ����� : �鹾���ûԮ� ::</b></div>�  ˹���á�ͧ �к� �鹾���ûԮ�.<br>� ��� ���š�ػ�ó��� ������� �ػ���.";
	global.langs["GuideBook"]	="������";
	global.langs["deGuideBook"]	="<div align=center><b>:: ����� : ������ ::</b></div>� ����� : ������ �Ը�������� .<br>� ��� ������ �Եڶ�ù�� ���š��Ը� �ؤڤ���Ҷ.";
	//ArrayContent
	global.langs["Content"]	="��úѭ";
	global.langs["deContent"]	="<div align=center><b>:: ����� : ͹ء�� : ��úѭ ::</b></div>�  �к� ��ª��� ˹ѧ��� ������. ���<b> ����� : ���� - ��</b> ��� <b> ����� : ���¹����ûԮ�</b> �������ª�������ͧ �ͧ��������.<br>� ��� "+global.categoryName[0]+"�� ��ڶ��� ��ڶ��� �ҵԡ� ����ʶ.";
	global.langs["DhammaPedia"]	="���ҹء��";
	global.langs["deDhammaPedia"]	="<div align=center><b>:: ����� : ͹ء�� : ���ҹء�� ::</b></div>�  �к� ���ҹء�� ������͹�Ź� �����Ǻ��� ����ͧ������ �ҹ����� 㹾���ûԮ� ��ö��� �ա� ��� ����ͧ��ǵ�ҧ � �ҧ ��оط���ʹ�.<br>� ��� "+global.categoryName[0]+"� ��Գڳ�����ҹء�� ����ʶ.";
	global.langs["Dictionary"]	="���ҹء��";
	global.langs["deDictionary"]	="<div align=center><b>:: ����� : ͹ء�� : ���ҹء�� ::</b></div>�  �к� ���ҹء�� �ӴѺ ���Ѿ�� ��������� [����ҡѺ �ӹǹ�Ѿ�� ��辺 㹾���ûԮ� ��ö��� �ա�].<br>� ��� "+global.categoryName[0]+"� ��Ըҹҹء�� ����ʶ.";
	global.langs["Glossary"]	="��ҹء��";
	global.langs["deGlossary"]	="<div align=center><b>:: ����� : ͹ء�� : ��ҹء�� ::</b></div>�  �к� ��ҹء�� �ӴѺ�ӷ�辺 㹾���ûԯ� ��ö��� �ա� ������ԧ�� ���˹�ҷ�辺 �Ѿ����.<br>� ��� "+global.categoryName[0]+"� ��ҹҹء�� ����ʶ.";
	//͹ءڡ�
	global.langs["sadda"]="�������Ѿ��";
	global.langs["dhamma"]="�����Ÿ���";
	global.langs["eth"]="�ѧ��� - ��";
	global.langs["the"]="�� - �ѧ���";
	global.langs["MeanToo"]="�鹤������´���";
//˹�Ҥ���
	//����� : ����-��
	global.langs["TPaliThai"]	="����� : ����-��";
	global.langs["deTPaliThai"]	="<div align=center><b>:: ����� : ����-�� ::</b></div>� �к� �鹾���ûԮ� ��ö��� �ա� ����-�� ��Ѻ�ѧ��¹� ���駷�� 6 <br>� ��� ��ڰʧڤ�¹�� ���� - ͯڰ��� - �ա�� ���š�ػ�ó� �ػ���.";
	global.langs["TPaliThaiSendFrame"]	="<a href=index.php?OMode=PI&bdr=off target=parent>����� : ����-��</a>";
	global.langs["TLernSendFrame"]	="<a href=index.php?OMode=TI&bdr=off target=parent>����� : ���¹����ûԮ�</a>";
	global.langs["TPaliThaiSearchFrame"]	="����� : ����-�� : ����";
	global.langs["deTThaiPaliBook"]	="<div align=center><b>:: ��Ǵ���������ѡ ::</b></div>��Ǵ������� ��к�������� : ����-�� �մѧ��� :-<br>&nbsp&nbsp&nbsp� 1. ൻԯ��<br>&nbsp&nbsp&nbsp� 2. ͯڰ���<br>&nbsp&nbsp&nbsp� 3. �ա�.<br>&nbsp&nbsp&nbsp� 4. �Թ�šڢ��.<br>&nbsp&nbsp&nbsp� 5. �صڵ�ڵšڢ��.<br>&nbsp&nbsp&nbsp� 6. ��Ը���šڢ��.<br>&nbsp&nbsp&nbsp� 7. ͭڭ����.<br>&nbsp&nbsp&nbsp� 8. ����ûԮ� ��.<br>&nbsp&nbsp&nbsp� 9. ��ö��� ��.<br>&nbsp&nbsp&nbsp� 10. �ա� ��.<br>&nbsp&nbsp&nbsp� 11. ��ó����� �Թ���ѡɳ� ��.<br>&nbsp&nbsp&nbsp� 12.��ó����� �ص�ѹ��ѡɳ� ��.<br>&nbsp&nbsp&nbsp� 13. ��ó����� ��Ը����ѡɳ� ��.<br>&nbsp&nbsp&nbsp� 14.���ҡó������л�ó���� �.<br>͹�� �պҧ��Ǵ�ѧ������Դ����� ���蹹�� ���ͧ�ҡ�ѧ����յ鹩�Ѻ �����ѧ���Թ��������������. ";
	//����� : ���¹����ûԮ�
	global.langs["TLearn"]	="����� : ���¹����ûԮ�";
	global.langs["deTLearn"]	="<div align=center><b>:: ����� : ���¹����ûԮ� ::</b></div>� �к��鹾���ûԮ� - ��ö����� ��Ѻ 91 ���� �������د�Ҫ�Է����� ��������ط����ä ��л�ó��Ӥѭ���.<br>� ��� �͡��ص��� ���ïڰ���һ��ǵڵ��ൻԯ���� ���š�ػ�ó� �ػ���.";
	//�ء�к�
	global.langs["SearchComplex"] = "����� : �ء�к�";
	global.langs["deSearchComplex"]="<div align=center><b>:: ����� : �ء�к� ::</b></div>� �к� �鹾���ûԮ� �ء�к� ��� ����� : ���� - �� ��� ����� : ���¹����ûԮ�.<br>� ��� ʾھ� ���š�ػ�ó� �ػ���.";
	
	//��������Ѻ��
	global.langs["SearchForm"]	="�����Ӥ�";
	global.langs["deSearchForm"]	="<div align=center><b>:: �����Ӥ� ::</b></div>� ������ ����ҹ��ͧ��� ����. <br>� ��� ���š����Ǩ�� ������Ҷ.";
	global.langs["deBookSelectForm"]	="<div align=center><b>:: ���͡������˹ѧ��� ::</b></div>� ���͡ ��Ǵ˹ѧ��ͷ���ͧ���. <br>� ��� ��ڶ��� �ԡ��� ��Ԥ�������Ҷ.";
	global.langs["deSendForm"]	="<div align=center><b>:: �ҡ�� ::</b></div>� �� �Ӥ� ��� ��Ǵ˹ѧ��� ����ҹ��ͧ��� ��ѧ�к�����. <br>� ��� ���š�� ��������Ҷ.";
	global.langs["deSubmitForm"]	="<div align=center><b>:: ������� ::</b></div>� �������ä��� (��ͧ�����Ӥ� ������͡���� ��͹�ء����). <br>� ��� ���š�� ��������Ҷ.";
	global.langs["deBookCheckboxForm"]	="<div align=center><b>:: ��� ::</b></div>� ��ҹ����ö �������ͧ���¶١ ���͡���� ����� ੾����������ҹ��ͧ��� ���ͼ��Ѿ�������� ��еç���������ͧ�����觢��.<br>� ��� ��ڶ� ��Ԥ�������Ҷ.";
	global.langs["deResultTypeForm"]	="<div align=center><b>:: �ٻẺ���Ѿ�� ::</b></div>���͡�ٻẺ���Ѿ������ :-<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;� <b>�ҧ��ǹ</b> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ��������ʴ� ੾�мźҧ��ǹ �ͧ���˹�� ���� ˹�� ��辺�ӷ���ͧ���.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;� <b>�ҧ��ǹ����(�ҧ��ǹ+)</b> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ����ö��˹� �ӹǹ�ѡ�� ��͹˹�� �����ѧ �ͧ�� ��ä�Ẻ�ҧ��ǹ �������Ǣ�͹��.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;� <b>���˹�� - ˹��</b> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; �ʴ��š�ä� ������˹�ҷ�辺 �ӷ���ͧ��� ���� ���˹�ҹ��";

//��͸Ժ����Ǵ��ó�
	//����� : ������
	global.langs["PP"]	="ൻԯ��";
	global.langs["AP"]	="ͯڰ���";
	global.langs["TP"]	="�ա�";
	global.langs["VinayaPrecisP"]	="�Թ�šڢ��";
	global.langs["SuttantaPrecisP"]	="�صڵ�ڵšڢ��";
	global.langs["AbhidhammaPrecisP"]	="��Ը���šڢ��";
	global.langs["OtherBook"]	="ͭڭ����";
	global.langs["PT"]	="����ûԮ���";
	global.langs["AT"]	="��ö�����";
	global.langs["TT"]	="�ա���";
	global.langs["VinayaPrecisT"]	="";
	global.langs["SuttantaPrecisT"]	="";
	global.langs["AbhidhammaPrecisT"]	="";
	global.langs["dePP"]	="<div align=center><b>:: ൻԯ�� ::</b></div>� ˹ѧ�����Ǵ ����ûԮ� ���Һ��� �ѡ���� �. �ѯ��ѧ��¹�.<br>� ��ڰʧڤ�¹�� ��������ǳ�� ൻԯ�����.";
	global.langs["deAP"]	="<div align=center><b>:: ͯڰ��� ::</b></div>� ˹ѧ�����Ǵ ��ö��� ���Һ��� �ѡ���� �. �ѯ��ѧ��¹�.<br>� ��ڰʧڤ�¹�� ��������ǳ�� ͯڰ��Ҥ���.";
	global.langs["deTP"]	="<div align=center><b>:: �ա� ::</b></div>� ˹ѧ�����Ǵ �ա� ���Һ��� �ѡ���� �. �ѯ��ѧ��¹�.<br>� ��ڰʧڤ�¹�� ��������ǳ�� �աҤ���.";
	global.langs["deVinayaPrecisP"]	="<div align=center><b>:: �Թ�šڢ�� ::</b></div>� ˹ѧ�����Ǵ ��ػ���� ����Թ�� ���Һ��� �ѡ���� �. �ѯ��ѧ��¹�.<br>� ��ڰʧڤ�¹�� ��������ǳ�� �Թ�ʧ�ࢻ - ʧڤˤ���.";
	global.langs["deSuttantaPrecisP"]	="<div align=center><b>:: �صڵ�ڵšڢ�� ::</b></div>� ˹ѧ�����Ǵ ��ػ���� ����ٵ� ���Һ��� �ѡ���� �. �ѯ��ѧ��¹�.<br>� ��ڰʧڤ�¹�� ��������ǳ�� �صڵ�ڵʧ�ࢻ - ʧڤˤ���.";
	global.langs["deAbhidhammaPrecisP"]	="<div align=center><b>:: ��Ը���šڢ�� ::</b></div>� ˹ѧ�����Ǵ ��ػ���� �����Ը��� ���Һ��� �ѡ���� �. �ѯ��ѧ��¹�.<br>� ��ڰʧڤ�¹�� ��������ǳ�� ��Ը���ʧ�ࢻ - ʧڤˤ���.";
	global.langs["deOtherBook"]	="<div align=center><b>:: ͭڭ���� ::</b></div>� ˹ѧ�����Ǵ ���.<br>� ��ڰʧڤ�¹�� ��������ǳ�� ͭڭ����.";
	global.langs["dePT"]	="<div align=center><b>:: ����ûԮ��� ::</b></div>� ˹ѧ�����Ǵ ����ûԮ��� ������ �. ����Է����� ��Ҩ���ŧ�ó� �Ҫ�Է�����.<br>� ����Է������� ��Ҩ���ŧڡó��� �������һ��ǵڵ�� ൻԯ�����.";
	global.langs["deAT"]	="<div align=center><b>:: ��ö����� ::</b></div>� ˹ѧ�����Ǵ ��ö����� ������ �. ����Է����� �����خ �Ҫ�Է����� ��� �. ����Է����� ��Ҩ���ŧ�ó� �Ҫ�Է�����.<br>� ����Է������� �����د��� � ����Է������� ��Ҩ���ŧڡó��� � �������һ��ǵڵ�� ͯڰ��Ҥ���.";
	global.langs["deTT"]	="<div align=center><b>:: �ա��� ::</b></div>� ˹ѧ�����Ǵ �ա��� ������.<br>� �������һ��ǵڵ�� �աҤ���.";
	global.langs["deVinayaPrecisT"]	="<div align=center><b>:: ::</b></div>� ";
	global.langs["deSuttantaPrecisT"]	="<div align=center><b>:: ::</b></div>� ";
	global.langs["deAbhidhammaPrecisT"]	="<div align=center><b>:: ::</b></div>� ";
	//����� : ���¹����ûԮ�
	global.langs["LTVinayaT"]	="�Թ����";
	global.langs["LTSuttantaT"]	="�ٵ���";
	global.langs["LTAbhidhammaT"]	="��Ը�����";
	global.langs["deLTVinayaT"]	="<div align=center><b>:: �Թ���� ::</b></div>� ˹ѧ�����Ǵ ����Թ�»Ԯ� ��� ��ö����� ������ �. ����Է����� �����خ �Ҫ�Է�����.<br>� ����Է������� �����د��� �������һ��ǵڵ�� �Թ»ԯ����� ͯڰ��Ҥ��� �.";
	global.langs["deLTSuttantaT"]	="<div align=center><b>:: �ٵ��� ::</b></div>� ˹ѧ�����Ǵ ����ٵ� ��� ��ö����� ������ �. ����Է����� �����خ �Ҫ�Է�����.<br>� ����Է������� �����د��� �������һ��ǵڵ�� �صڵ�ڵ�ԯ����� ͯڰ��Ҥ��� �.";
	global.langs["deLTAbhidhammaT"]	="<div align=center><b>:: ��Ը����� ::</b></div>� ˹ѧ�����Ǵ �����Ը����Ԯ� ��� ��ö����� ������ �. ����Է����� �����خ �Ҫ�Է�����.<br>� ����Է������� �����د��� �������һ��ǵڵ�� ��Ը����ԯ����� ͯڰ��Ҥ��� �.";
	//���� - ��� - ˹��
	global.langs["BookNum"]	="�Ţ����";
	global.langs["deBookNumForm"]	="<div align=center><b>:: �Ţ���� ::</b></div>� ����������Ţ���� ����ҹ��ͧ��� ����ͧ���. ����ö���Ţ�������»��� [?] ��ҹ�� ";
	global.langs["SpanNum"]	="�Ţ���";
	global.langs["deSpanNum"]	="<div align=center><b>:: �Ţ���(��ھ) ::</b></div>� �Ţ��ͧ͢ ��ͤ�������ҹ ���ѧ�Դ����. �ҧ��ǧ�ͧ������� ��੾�е͹��鹵鹤������ �Ҩ������Ţ��� ����Ҩ������ԧ����ѧ �������������Ǣ�ͧ����� ��觷ҧ�к����Դ������ ���˹���á�ͧ����������ͧ������ ������Ҫ�Ẻ�Դ��ҹ ���� �Ҩ���Ըդ鹤ӷ��Ҵ��� ���龺���繡�û���ء���� ��Ŵ���дѺ˹���蹡ѹ. ";
	global.langs["deSpanNumForm"]	="<div align=center><b>:: �Ţ��� ::</b></div>� ����������Ţ��� ����ҹ��ͧ��� ����ͧ���. ";
	global.langs["PageNum"]	="�Ţ˹��";
	global.langs["dePageNumForm"]	="<div align=center><b>:: �Ţ˹�� ::</b></div>� ����������Ţ˹�� ����ҹ��ͧ��� ����ͧ���";
	
//�����˹���ʴ��š�ä�����Դ��ҹ
	//���������
	global.langs["All"]	="������";
	global.langs["deAll"]	="<div align=center><b>:: ������ ::</b></div>� ��������駻ǧ.<br>� ʾھ�.";
	global.langs["deViewOptionMenuForm"]	="<div align=center><b>:: �Դ��������� ::</b></div>� �Դ���������.<br><b><u>���������</u></b> �繡�����ͧ �ػ�ó������ 㹡����������ͧ �ͧ˹�������ҧ��� �·�ҹ����ö �Դ���˹�Ҵ�ҹ�� �����ҧ ��ͨҡ ���˹�� �����ѧ�Դ���� ���������ҹ �к���ͤ��� ����ҹ�� �����ѧ���˹�� ����������Ţ �������ҹ ��ͧ����� �ա����.";
	global.langs["deLinkViewOptionMenu"]	="<div align=center><b>:: ��������� ::</b></div>� �ʴ� ੾�����˹�ҹ�� �����<u>��ͧ�Դ�������������</u> ��� <u>��ͧ��ѧ��ǧ˹�ҷ���ͧ���</u>.<br>� ��� ��� ǵڶء�ҵԡ���� � ��Է��ʹػ�ó�ڨ ǵڶؤ��ػ�ó�ڨ �ػ������Ҷ.";
	global.langs["deLinkPreviousnessParagraph"]	="<div align=center><b>:: ���˹�ҡ�͹ ::</b></div>� ��ѧ ���˹�� ��͹���.<br>� ��� ��� ǵڶء� �ҵԡ�� �� �͡ǵڶء�˯ڰ�� �ػ������Ҷ.";

	global.langs["deLinkNextParagraph"]	="<div align=center><b>:: ���˹�ҶѴ� ::</b></div>� ��ѧ ���˹�� �Ѵ�.<br>� ��� ��� ǵڶء� �ҵԡ�� �� �͡ǵڶء������ �ػ������Ҷ.";
	global.langs["deLinkPreviousnessStory"]	="<div align=center><b>:: ����ͧ��͹˹�� ::</b></div>� ��ѧ ��Ǣ������ͧ ��͹���.<br>� ��� ��� ǵڶء� �ҵԡ�� �� �͡�ҵԡһ��� �ػ������Ҷ.";
	global.langs["deLinkViewOptionStory"]	="<div align=center><b>:: ����ͧ�Ѩ�غѹ ::</b></div>� �ʴ� ��Ǣ������ͧ �Ѩ�غѹ.<br>� ��� ��� �ҵԡ���� �ػ������Ҷ.";
	global.langs["deLinkNextStory"]	="<div align=center><b>:: ����ͧ�Ѵ� ::</b></div>� ��ѧ��� �������ͧ �Ѵ�.<br>� ��� ��� ǵڶء� �ҵԡ�� �� �͡�ҵԡһ����� �ػ������Ҷ.";
	global.langs["deLinkPP"]	="<div align=center><b>:: ൻԯ����� ::</b></div>� �Դ ����ûԮ����Һ��� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� �ԯ� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkAP"]	="<div align=center><b>:: ͯڰ��һ��� ::</b></div>� �Դ ��ö������Һ��� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� ͯڰ����� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkTP"]	="<div align=center><b>:: �աһ��� ::</b></div>� �Դ �ա����Һ��� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� �ա��� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ���.";
	global.langs["deLinkPT"]	="<div align=center><b>:: ����ûԮ��� ::</b></div>� �Դ ����ûԮ��������� �ͧ����+��͹�� (�����.<br>� ��� ������ ��ڶ��� ����ïڰ���һ��ǵڵ�»ԯ� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkAT"]	="<div align=center><b>:: ��ö����� ::</b></div>� �Դ ��ö����������� �ͧ����+��͹�� (�����).(੾���Ѫ���-�ѧ�ص��).<br>� ��� ������ ��ڶ��� ����ïڰ���һ��ǵڵ��ͯڰ����� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkTT"]	="<div align=center><b>:: �ա��� ::</b></div>� �Դ �ա��������� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� ����ïڰ���һ��ǵڵ�¯ա��� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkPreviousnessParagraph1"]	="<img src=./images/1b.png border=no width=16 height=16 /><span><div align=center><b>:: ��͹ 1 ���˹�� ::</b></div>� ��ѧ ���˹�ҡ�͹���.<br>� ��� ��� ǵڶء� ��ڨǵڶء�˯ڰ� �ػ������Ҷ.";
	global.langs["deLinkPreviousnessParagraph5"]	="<img src=./images/5b.png border=no width=16 height=16 /><span><div align=center><b>:: ��͹ 5 ���˹�� ::</b></div>� ��ѧ ���˹�ҷ�� 5 ��͹���.<br>� ��� ��� ǵڶء� ��ڨǵڶء�˯ڰ� �ػ������Ҷ.";
	global.langs["deLinkPreviousnessParagraph20"]	="<img src=./images/20b.png border=no width=16 height=16 /><span><div align=center><b>:: ��͹ 20 ���˹�� ::</b></div>� ��ѧ ���˹�ҷ�� 20 ��͹���<br>� ��� ��� ǵڶء� ��ʵ�ǵڶء�˯ڰ� �ػ������Ҷ.";
	global.langs["deLinkNextParagraph1"]	="<img src=./images/1f.png border=no width=16 height=16 /><span><div align=center><b>:: �Ѵ� 1 ���˹�� ::</b></div>� ��ѧ ���˹�ҶѴ�.<br>� ��� ��� ǵڶء� ��ڨǵڶءһ�� �ػ������Ҷ.";
	global.langs["deLinkNextParagraph5"]	="<img src=./images/5f.png border=no width=16 height=16 /><span><div align=center><b>:: �Ѵ� 5 ���˹�� ::</b></div>� ��ѧ ���˹�ҷ�� 5 �Ѵ���.<br>� ��� ��� ǵڶء� ��ڨǵڶءһ�� �ػ������Ҷ.";
	global.langs["deLinkNextParagraph20"]	="<img src=./images/20f.png border=no width=16 height=16 /><span><div align=center><b>:: �Ѵ� 20 ���˹�� ::</b></div>� ��ѧ ���˹�ҷ�� 20 �Ѵ���.<br>� ��� ��� ǵڶء� ��ʵ�ǵڶءһ�� �ػ������Ҷ.";
	global.langs["deLinkBegin"]	="<img src=./images/first.png border=no width=16 height=16 /><span><div align=center><b>:: ���˹���á ::</b></div>� ��ѧ ���˹���á �ͧ�������.<br>� ��� ��� ���ǵڶء� �ػ������Ҷ.";
	global.langs["deLinkEnd"]	="<img src=./images/end.png border=no width=16 height=16 /><span><div align=center><b>:: ���˹���ش���� ::</b></div>� ��ѧ ���˹���ش���� �ͧ�������.<br>� ��� ��� ������ҹǵڶء� �ػ������Ҷ.";
	global.langs["deLinkRelateAll"]	="<div align=center><b>:: ����������� ::</b></div>� �Դ ����ûԮ� - ��ö��� - �ա� ����+�� ����+��͹�� ������.<br>� ��� ʾھ� �͡�ڵ� ǵڶء� �ػ������Ҷ.";
	global.langs["deLinkPrecisPP"]	="<div align=center><b>:: ʧڤ˻��� ::</b></div>� �Դ �ѧ�ˤѹ����Һ��� (������Ҿ���¹��� �Ѵ���㹡��������ûԮ�) �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� ʧڤ˻����� ����� (�ԯ� �����ï�హ ʧڢ��¹) ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkPrecisAP"]	="<div align=center><b>:: ʧڤ�ͯڰ��һ��� ::</b></div>� �Դ �ѧ����ö������Һ��� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� ʧڤ˯ڰ����� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkPrecisTP"]	="<div align=center><b>:: ʧڤ˯աһ��� ::</b></div>� �Դ �ѧ�˯ա����Һ��� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� ʧڤ˯ա��� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ���.";
	global.langs["deLinkPrecisPT"]	="<div align=center><b>:: �ѧ�˻�ó���Ǵ ����ûԮ��� ::</b></div>� �Դ �ѧ�ˤѹ�� (������Ҿ���¹��� �Ѵ���� ���������ûԮ�) �������� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� ����ïڰ���һ��ǵڵ�¤��� ����� (�ԯ� �����ï�హ ʧڢ��¹) ʧڤˤ��ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkPrecisAT"]	="<div align=center><b>:: �ѧ����ö����� ::</b></div>� �Դ �ѧ����ö��� �������� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� ����ïڰ���һ��ǵڵ��ͯڰ����� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";
	global.langs["deLinkPrecisTT"]	="<div align=center><b>:: �ѧ�˯ա��� ::</b></div>� �Դ �ѧ�˯ա��������� �ͧ����+��͹�� (�����).<br>� ��� ������ ��ڶ��� ����ïڰ���һ��ǵڵ�¯ա��� ����� ���ඹ ��ˡ�ڵ� ��ھ� �ػ������Ҷ.";

	global.langs["deStoryName"]	="<div align=center><b>:: ��͹����ǡѺ��������ͧ(ǵڶ�) ::</b></div>� �բ���й���� ��ҹ��������� ��Т��㹡����ҧ�ԧ��ó� ������ѧ���ѯ����-�ա� �����������������ͧ(ǵڶ�) �� ��صڶ��Ԩ��� �繵鹷���ʴ�������(�ҡ������), ���л�ó���� ������ѧ����ö��� - �աҺҧ���� �ʴ���������ͧ����������ͧ ������������ͧ ����͹�ҡ��Ǣ�ͧ͢��� 1 ����ͧ. �ҡ����ҧ�ԧ���ª�������ͧ ����Դ�ٴ��� ������Ǣ������ͧ ��駡�͹ �����ѧ ��Ǣ�͹�� ���� �������˹�ҷ�駺� �����ҧ����ત ��͹��ҧ�ԧ������� �繪�������ͧ �ͧ��Ǣ�ͷ����ѧ�Դ���� (�óդ�������ʴ���������ͧ��͹�ʴ�����ͧ) ���͢�� ��͹��� (�óդ���������ʴ���������ͧ����������ͧ ��觻��Ծ���ѧ����ö���-�ա� �� �Թ��ԹԨ��ͯڰ��� �ͧ��ҹ��оط��ѵ�Ҩ���� �繵�.) ��ǹ���������������ѧ��辺�ѭ�ҹ��.";
	global.langs["Bug"]	="����� : �Ԫ�";
	global.langs["deBug"]	="<div align=center><b>:: ����� : �Ԫ� ::</b></div>� �͡���� �ҧ���ҧ�Ѻ����� : �� ��ͼԴ��Ҵ ����й� ��͵� ��ͪ� �������� ���.<br>� ��� ������ �� �� ��������� ����⤻���� ǵ�൵�<b>�</b> �����ǻ�䫵� �ػ���.";
function langs(id) {
	if (arguments.length>1){document.getElementById(arguments[1]).innerHTML=global.langs[id];}
	else {document.getElementById(id).innerHTML=global.langs[id];}
	}