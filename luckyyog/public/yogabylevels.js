//name=The name of the asana.
        //The sanskrit name of the asana is the name being fetched from localStorage and acting globally
        //meaning=Meaning of the name of the asana
        
        
        function titles(name,meaning)
        {
            var nameid="asana-name";
            var snameid="sanskrit-name";
            var meaningid="asana-meaning";
            document.getElementById(nameid).innerText=name;
            document.getElementById(snameid).innerText=asana_name;
            document.getElementById(meaningid).innerText=meaning;
        }

        //This function will create an image and append it to the div having particular id.
         //imgid= Id of the image object being created.
         //alt=Alternate text for the image.
         //src=source of the file.
         //cid=Container Id                    
         //function imageobj(cid,imgid,alt,src)
        
        //This function will use the imgobj and heading for creating the procedure
        function procedure()
        {
            var id="pro";
            var headingid="step-heading";
            switch(asana_name)
            {
                case "Savasana":
                    //Step 1
                    //    container id, object id
                    
                    //   container id, object id, text for heading
                    listitem(id,"  Support Your Legs on a Chair");
                    //   container id, object id, alternate text,   source 
                    //Step 2
                    listitem(id,"Step2: Support Your Back and Head with Folded Blankets");
                    //Step 3
                    listitem(id,"Step3: Savasana");
                   
                break;
                case "Vajrasana":
                  
                    listitem(id,"  Keep the soles of the feet on both sides of the anus i.e. place the thighs on the legs one over the other and the soles on the buttocks.");
                    listitem(id,"  The part from the toe to the knee should touch the ground. The whole burden of the body is put on the knees and ankles.");
                    listitem(id,"  Keep the spine straight and close the eyes.");
                    listitem(id,"  Keep the right palm on right knee and left palm on left knee. Inhale slowly then exhale.");
                    listitem(id,"  Initially, start by sitting in this posture for 5 minutes. Gradually increase the time for 15 minutes.");
                break;
                case "Adhvasana":
                        listitem(id,"  In the prone position place your forehead on ground.");
                        listitem(id,"  Stretch your hands forward and join them ahead of your head.");
                        listitem(id,"  Stretch your legs in opposite direction.");
                        listitem(id,"  Relax all the muscles.");
                        listitem(id,"  Continue normal breathing.");
                break;

                case "Parvatasana":
                    listitem(id,"  Sit in Vajrasana and keep your spine and neck straight.");
                    listitem(id,"  lose your eyes gently and inhale raising both the hands above the head.");
                    listitem(id,"   Join the palms in namaskar mudra. Elbows should be straight and hands stretched upwards. Breathing should be slow and deep. Feel the beat of the heart.");
                    listitem(id,"  Return to normal position while exhaling. This asana can be performed three to four times.");
            break;

     case "Shalabhasana":
         listitem(id,"  Lie down on your stomach.");
        listitem(id,"  Take your both hands behind and hold the wrists of one hanwith the other.");
        listitem(id,"   Now inhale; at first lift your chest as much as you can anlook upwards.");
        listitem(id,"  Slowly lift your body from the both sides.");
        listitem(id,"  Now exhale and come back to your initial position.");
        break;

        case "Vrikshasana":
        
        listitem(id,"  Begin standing in Mountain Pose (Tadasana), with your arms ayour sides.");
        listitem(id,"  Shift your weight to your left foot.");
         listitem(id," Rest your hands on your hips and lengthen your tailbone towarthe floor.");
         listitem(id," Fix your gaze gently on one, unmoving point in front of you.");
        listitem(id," Draw down through your left foot.");
            break;
      
         case "Makarasana":
             listitem(id," Lie down straight on your stomach.");
            listitem(id," Now join your elbows, making a stand and place your palmunder the chin.");
            listitem(id," Lift your chest up and Keep your elbows and legs together.");
            listitem(id," During inhaling, first fold your one leg at a time and theboth the legs together.");
            listitem(id," While exhaling, your feet should be straight and keep youhead steady.");
                break;

                case "Swastikasana":
            listitem(id," Take a seated position on the floor, sitting erect.");
            listitem(id," read both the legs in front of you a feet apart.");
            listitem(id," Now, bend left leg from the knee such that the sole of youleft foot rests on the inner side of the right thigh.");
            listitem(id," Bend right leg from the knee and place the foot in betweethe thigh and the calf of the left leg.");
            listitem(id," Rest the wrists of both the hands on respective knees wityour spine erect. Breathe normally.");
                break;

                 case "Brahma_Mudra":
                listitem(id," First of all, sit in any comfortable seating posturand place the hands with palm pointing upwards on the thighs or the knees.");
                listitem(id," Meditation postures like Padmasana, SiddhasanaSwastikasana, Vajrasana, etc. are ideal for the practice of mudras.");
                 listitem(id," Close your eyes and take some deep breaths with thawareness of the breathing process.");
                 listitem(id," Now fold your thumb and thumb is placed at the base othe small finger.");
                listitem(id," Then remaining fingers curl over the thumb, puttinpressure over the outer thumb and making a gentle fist.");
                     break;

                case "Anantasana":
                 listitem(id," Begin by lying on your back.");
              listitem(id," Stretch your right arm to the back of your mat.");
            listitem(id," Bend your right arm and lift your head.");
            listitem(id," Flex both feet.");
            listitem(id," Try to keep your whole body in one line from elbow to heels.");
             listitem(id," Bend your left knee and take hold of the big toe with your left hand in a yogi toe lock.");
              listitem(id," Straighten your left leg toward the ceiling as much as possible and maintain the balance.");
             break;

              case "Surya_Namaskar":
                listitem(id," Prayer pose – Pranamasana.");
             listitem(id," Raised arms pose – Hastauttanasana");
           listitem(id," Hand to foot pose – Hasta Padasana");
           listitem(id," Stick pose – Dandasana");
           listitem(id," Salute with eight parts or points – Ashtanga Namaskara");
            listitem(id," Hand to foot pose – Hasta Padasana");
            break;

            case "Sarvangasana":
                
           listitem(id," Lie down in the supine position or lying on your stomach.");
            listitem(id," Raise your legs slowly upward and bring it to 90° angle.");
           listitem(id," Bring the legs towards head by raising the buttocks up.");
           listitem(id," Raise the legs; abdomen and chest try to form a straight line.");
           listitem(id," Place the palms on your back for support.");
            listitem(id," Place the chin against the chest.");
            listitem(id," Maintain the position as long as comfortable.");
            listitem(id,"Try to maintain the pose up to 30 seconds or more and Slowly return back to the original position");
break;
            case "Padmasana":
                
                listitem(id," Sit on the floor and stretch your legs, your legs should be straight in front. Hold the right leg in both the hands, fold the legs slowly and place it on your left thigh. Ensure that your feet should touch your navel.");

             listitem(id," Same like earlier fold the left knee, and hold it with both hands and place it on the right thigh close to the other. At this point your both knees should touch the floor and the foot should face upwardly.");

           listitem(id," Your spinal cord should be straight at this point. If you feel some difficulty while sitting in the posture for a long time, you can change the legs and then sit in the same position.");

           listitem(id," Your spinal cord should be erect, your both hands should be together or put the palms facing upside on the knee joints and the thumb must touch your index finger and the other fingers should face the upward.");

           listitem(id," Breathing process should be slowly – slowly and deeply. ( Inhale and Exhale) and focus on your breathing. Do this asana for 2 to 3 minutes in the beginning stage, once you are used to it then increase the time by 15 to 30 minutes. Remember one most important thing don’t bend our body or head while doing this Asana.");
     break;
         case "Matsyasana":
                listitem(id," Start by sitting at Padmasana or Lotus Pose.");
                listitem(id," Relax your body in Padmasana by taking deep and long breaths");
                listitem(id," Move your body slowly backward by placing your right forearm and elbow carefully on the floor. Do the same with your left arm.");
                listitem(id," Now by taking the support of your forearms and elbows, lower slowly your body while placing the crown of your head gently on the floor.");
                listitem(id,"Try to arch the back as far as possible without straining. Make sure that you hold your feet with hands.");
                listitem(id,"Close your eyes and completely relax your body. Gently take deep and slow breaths. Hold in this final pose at least for a couple of seconds.");
                listitem(id,"Exhale gently and reverse these movements gently one by one as you release the posture.");
        break;
        
        case "Naukasana":
                listitem(id," Start by sitting at Padmasana or Lotus Pose.");
                listitem(id," Relax your body in Padmasana by taking deep and long breaths");
                listitem(id," Move your body slowly backward by placing your right forearm and elbow carefully on the floor. Do the same with your left arm.");
                listitem(id," Now by taking the support of your forearms and elbows, lower slowly your body while placing the crown of your head gently on the floor.");
                listitem(id,"Try to arch the back as far as possible without straining. Make sure that you hold your feet with hands.");
                listitem(id,"Close your eyes and completely relax your body. Gently take deep and slow breaths. Hold in this final pose at least for a couple of seconds.");
                listitem(id,"Exhale gently and reverse these movements gently one by one as you release the posture.");
        break;
      
        case "Dhanurasana":
            listitem(id," First of all lie down in prone position.");
            listitem(id," Exhale, bend your knees and hold the ankles with hands.");
            listitem(id," While inhaling raise the thighs, head and chest as high as possible.");
            listitem(id," Try to maintain weight of the body on lower abdomen. Join the ankles. Look upward and breathe normally.");
            listitem(id,"While exhaling, bring down the head and legs up to knee joint. Maintain this position as long as you can hold and slowly come back to the original position.");
    break;
    }
    
    }











        //This function will use listitem function for appending the precautions
        function precautions()
        {
            var id="pre";
            switch(asana_name)
            {
                case "Savasana":
                    listitem(id,"Avoid moving the body");
                    listitem(id,"Avoid practicing this asana in the disturbing atmosphere");
                break;
                case "Vajrasana":
                    listitem(id,"A person suffering from joint pain should avoid this asana");
                    listitem(id,"People who have any spinal column ailments, especially on the lower vertebrae should not attempt this pose");
                    listitem(id,"Those with hernia, intestinal ulcers and other diseases of the small and large intestine should practice this pose under expert guidance and advice.");
                break;
                case "Adhvasana":
                    listitem(id,"Do not stretch your legs or hands to an uncomfortable level.");
                break;

                case "Parvatasana":
                    listitem(id,"If you feel pain or excruciating stretch abort performing.");
                    listitem(id,"While sitting, do not lift your butt");
                    listitem(id,"Keep your back and neck straight");
                break;

               
                case "Shalabhasana":
                    listitem(id,"People suffering from any of this condition should avoid practicing Shalabhasana: abdominal tuberculosis, hernia, stomach ulcers or any other similar condition.");
                    listitem(id,"This asana is not suitable for people having high blood pressure or a weak heart.");
                break;

                case "Vrikshasana":
                    listitem(id,"Avoid practicing Vrikshasana in case you suffer from any these condition: vertigo, high or low blood pressure, knee or ankle pain, insomnia, dizziness or a migraine.");
                    listitem(id,"You can fix your gaze all you want, but if your standing leg isn’t “zipped up” then it will be very hard to balance for long periods of time, and let’s face it — Tree pose can be so delicious as a meditation!");
                  break;

                  
                case "Makarasana":
                    listitem(id,"Avoid moving the body in this asana as it may disturb the practice.");
                    listitem(id,"Don't put stress on the body during this asana as it is all about peacefully relaxing the body.");
                    listitem(id,"Avoid practicing this asana in the disturbing atmosphere as it may disturb the peace of mind.");
                    listitem(id,"Avoid practicing this asana in the disturbing atmosphere as it may disturb the peace of mind.");
                  break;

                  case "Swastikasana":
                    listitem(id,"Swastikasana should not be done by those suffering from sciatica and sacral infections.or  concern a doctor.");
                    listitem(id,"Who suffering from sciatica or those with knee pain or injury should skip this asana.");
                    listitem(id,"People with arthritis of the knees, hips, and feet should avoid sitting on the floor.");
                  break;

                  case "Brahma_Mudra":
                    listitem(id,"However, all mudras are beneficial to us without any side-effects. pressure should not be applied on the finger. Pressure means, your mind is restless and not stable. As a result, nothing at all. Perform this mudra freely.");
                    listitem(id,"All mudra is very effective when you do the mudras between 4-6 AM and also, for an excellent, the best and efficient results, make sure you practice regularly for two months.");
                   
                  break;

                  case "Anantasana":
                    listitem(id,"Avoid this pose if you have pain or injury to your neck, shoulders, or back. If you feel any sharp pain during this pose, gently release it.");
                  
                  break;

                  case "Surya_Namaskar":
                    listitem(id,"Warm up your body before doing Surya Namaskar with the help of Sukshma Kriyaas.");
                    listitem(id,"Perform Surya Namaskar slowly at ease and try to hold every position for a while and feel it.");
                    listitem(id,"Focus on your breathing while performing every step. For example, breathe in while you are going back and breathe out while your spinal cord is bending forwards.");
                    listitem(id,"These days, various yoga centres treat it like an exercise and think that it is good to do it fast. Don't fall in this trap. You should try to connect with it while doing.");
                    listitem(id,"The synchronization between your breath and poses is most important.");
                  break;

                  case "Sarvangasana":
                    listitem(id,"The shoulderstand yoga pose is good for the healthy functioning of pituitary, pineal, kidney, liver, spleen and testes. Thus, it regulates the functions of all the glands of the body.");
                    listitem(id,"The asana is good in case of circulatory system, respiratory system and digestive system.");
                    listitem(id,"It enhances the supply of blood to the head region and good for managing headache and migraine.");
                    listitem(id,"It has cooling effect to the nerves, thus beneficial for high blood pressure patient.");
                    listitem(id," It is good for insomnia patient as it facilitates blood supply to this region.");
                    listitem(id," It seems to be panacea for constipation patient. Person suffering from constipation should practice it regularly.");
                    listitem(id," It stimulates the intestinal and stomach glands thus good for ulcer in these region.");
                    listitem(id,"It enhances supply of blood in the head region and prevents hair fall.");
                    listitem(id,"It is good for eye vision.");
                    listitem(id,"It helps to prevent wrinkles, pimples and delay aging.");
                  break;
                  case "Padmasana":
                    listitem(id,"People who are suffering from an ankle injury should not practice this asana. In case you have undergone a recent knee surgery please avoid this asana. If you have a sprain in the leg, then our advice is not to do this asana. Don’t perform this if you suffering from severe back pain.");
                  break;
                  case "Matsyasana":
                    listitem(id,"People who are suffering from heart diseases, high blood pressure or low blood pressure should not perform Matsyasana.");
                    listitem(id,"Patients of migraine and insomnia should also abstain from practicing the Fish Pose.");
                    listitem(id,"Individuals having serious neck or lower-back injuries are recommended strongly not to perform this pose.");
                    listitem(id,"Men and women who just had an abdominal surgery should not perform Matsyasana. This also applies to people with a hernia.");
                    listitem(id,"If a person has issues like dizziness or cervical spine problems, then he or she should not perform this asana");
                    listitem(id,"People having migraines and peptic ulcers should also refrain from including Matsyasana in their yoga routine.");
                  break;
                  case "Bhujangasana":
                    listitem(id,"Don’t keep your body stiff.");
                    listitem(id,"Do not force yourself too much practicing it.");
                    listitem(id,"Keep your buttocks loose as they tend to tighten up naturally during Cobra pose.");
                    listitem(id,"Do not raise your body too up making L-shape.");
                    listitem(id," Consult a yoga specialist if you’re suffering from hernia, peptic ulcer, hyperthyroidism, or intestinal tuberculosis.");
                    listitem(id,"Don’t keep your arms straight. Keep your elbows outwards.");
                break;
                case "Dhanurasana":
                    listitem(id,"Do not practice Bow Pose (Dhanurasana) if you have high or low blood pressure, hernia, neck injury, pain in the lower back, headache, migraine or recent abdominal surgery.");
                    listitem(id,"People suffering from heart problems should avoid this.");
                    listitem(id,"This asana should be performed on an empty stomach.");
                    listitem(id,"It is recommended not to do Dhanurasna immediately before going to bed at night as this asana stimulates the adrenal glands and the sympathetic nervous center in the navel, which may lead to sleep problems.");
                    listitem(id,"Pull your chest and thighs equally up and do not bend your elbows.");
                    listitem(id,"Keep the width of your knees strictly according to the width of your shoulders.");
                    listitem(id,"Persons with sway back or a severe backache should avoid this.");
                break;
                case "Chakrasana":
                    listitem(id,"Do not practice Chakrasana directly. You should practice easy postures such as setu asana and other backward back bending asanas as preparatory asanas before practicing Chakrasana.");
                    listitem(id,"It should not be practiced by people suffering from any illness.");
                    listitem(id,"Chakrasana is not suitable for weak people having some weakness in wrist or back.");
                    listitem(id,"Women should avoid practicing Chakrasana during pregnancy.");
                break;
                case "Paschimottanasana":
                    listitem(id,"Do not practice this asana if have these diseases : Abdominal ulcer,Asthma, Diarrhea, Back injury,Pregnancy, Sciatica, Slipped Disc");
                break;
                case "Gomukhasana":
                    listitem(id,"Avoid straining the body beyond the limits as it may cause back pain or spinal injury.");
                    listitem(id,"Consult a yoga trainer, if you are a beginner as this asana requires a lot of flexibility.");
                    listitem(id,"Do not overburden your body, if you are obese. Practice it according to the comfort level of the body.");
                    listitem(id,"People suffering from any of this condition should avoid practicing this asana: shoulder, back, neck or joint pain, migraine, or spinal disorders.");
                break;
                case "Patangasana":
                    listitem(id,"Keep the spine erect while the practice.");
                    listitem(id,"Ensure you don’t use force on the knees while practicing this asana. Only push the thighs down.");
                    listitem(id,"If you experience discomfort in the knees place a blanket below the thighs for support.");
                    listitem(id,"If you suffer from any of this condition avoid practicing Butterfly Pose: Knee or groin injury, sciatica, sacral conditions.");
                break;

                //...............starting of health problems..................
                case "Trikonasana":
                    listitem(id,"Don’t overstretch the body while practicing this asana as it may cause unnecessary pain or injury.");
                    listitem(id,"If the neck begins to hurt in the upward direction, slightly lower it.");
                    listitem(id,"Avoid practicing this asana in case of severe pain in the neck, back or shoulders.");
                    listitem(id,"People suffering from any of these conditions should avoid practicing this asana: any kind of injury in the knee, arthritis, vertigo, spinal disorders, high blood pressure, breathing trouble, migraine, heart problem or cervical spondylitis.");
                break;
                case "Ushtrasana":
                    listitem(id,"Breath normally throughout the practice. Avoid long and deep breaths as the chest is already stretched during this asana and taking long, deep breaths may create discomfort in breathing.");
                    listitem(id,"Beginners after practicing Ustrasana may feel dizzy for a while. It may also cause nausea as well but that’s very rare.");
                    listitem(id,"People suffering from high or low blood pressure should avoid practicing this asana.");
                    listitem(id,"People suffering from insomnia should avoid this asana.");
                    listitem(id,"Ustrasana should be avoided by people having any back injury or pain in the neck.");
                    listitem(id,"Ustrasana is not recommended for people suffering from a migraine.");
                break;
                case "Ardha_Matsyendrasana":
                    listitem(id,"Should be avoided during pregnancy and menstruation due to the strong twist in the abdomen.");
                    listitem(id,"People with Heart, abdominal or brain surgeries should not practice this asana.");
                    listitem(id,"Care should be taken for those with peptic ulcer or hernia.");
                    listitem(id,"Those with severe spinal problems should avoid and those with mild slipped disc can benefit but in severe cases it should be avoided.");
                break;

                //....obesity..........//
                case "Halasana":
                    listitem(id,"Avoid practicing Halasana in case you suffer from any of this condition: Slipped disc, severe pain or injury in back or neck, hernia, sciatica, enlarged thyroid, spleen or liver, cervical problems, heart conditions or frequent headaches.");
                    listitem(id,"Halasana must not be practiced during pregnancy and while menstruation.");
                break;
                case "Veerasana":
                    listitem(id,"People suffering from any kind of knee weakness or knee injury should not practice this asana.");
                    listitem(id,"If you suffer from any of this condition avoid practicing this asana: arthritis, spinal disorders, osteoarthritis, high blood pressure, respiratory diseases or any heart disease. ");
                break;
                case "Ashwa_Sanchalanasana":
                    listitem(id,"Be careful with the alignment of the knee in the front leg, it should be in line with the ankle. Don’t over practice as that could strain the muscles.");
                    listitem(id,"People with any neck problem should look straight instead of upward direction.");
                    listitem(id,"People suffering from any kind of knee and ankle problem should avoid practicing this asana.");
                break;
                case "Pavanmuktasana":
                    listitem(id,"Pregnant women should not perform this asana.");
                    listitem(id,"People with serious back conditions, such as sciatica and slipped disc should avoid this asana.");
                break;
                case "Kati_Chakrasana":
                    listitem(id,"People with hernia, slip disk, spinal injuries, cervical spondylitis and those who have gone through abdominal surgery recently should avoid this asana.");
                    listitem(id,"If you have high blood pressure, be cautious while practicing Katichakrasana. This practice may cause giddiness and faintness in you.");
                break;
                case "Tadasana":
                    listitem(id,"Avoid practicing this asana for too long as prolonged standing may cause strain on the muscles of the legs.");
                    listitem(id,"Don’t put too much pressure on the knees as it may cause pain in the knees.");
                    listitem(id,"People suffering from any of this condition should avoid practicing this asana: migraine, insomnia, joint pain or low blood pressure.");
                break;
                case "Ardha_Chakrasana":
                    listitem(id,"Ardha Chakrasana should not be done by those suffering from any neck, hip or spinal injury.");
                    listitem(id,"Be cautious while doing this pose if you have vertigo.");
                    listitem(id,"Those suffering from high blood pressure should avoid this pose.");
                    listitem(id,"Pregnant women should avoid all poses that puts any strain on the foetus.");
                break;
                case "Naukasana":
                listitem(id,"Suffering from low and high blood pressure, hip joint pain, arthritis, severe headache, migraine,  hernia and ulcer patients should not practice Naukasana (Boat Pose).");
                listitem(id," Consult a doctor first before practicing any exercise and practice under expert guidance.");
                listitem(id,"Pregnant women should not practice this boat pose.");
                listitem(id,"Avoid practicing during periods but if you are comfortable to practice then go ahead.");
        break;
                   
            }
        }












        function benefits()
        {
            var id="benefit";
            switch(asana_name)
            {
                case "Savasana":
                    listitem(id,"Calms the brain and helps relieve stress and mild depression");
                    listitem(id,"Relaxes the body");
                    listitem(id,"Reduces headache, fatigue, and insomnia");
                    listitem(id,"Helps to lower blood pressure");
                break;
                case "Vajrasana":
                    listitem(id,"It is the best Asana for meditation and concentration.");
                    listitem(id,"Helps in keeping the mind stable and calm.");
                    listitem(id,"Cures indigestion, acidity, gas formation and constipation, increases digestion process.");
                    listitem(id,"Helps in back pain.");
                    listitem(id,"Beneficial in urinary problems.");
                    listitem(id,"Useful for arthritis patients.");
                    listitem(id,"This asana can also help in improving the functions of the liver.");
                break;
                case "Adhvasana":
                    listitem(id,"Effective for slipped disk and stiffness of the neck.");
                    listitem(id,"Good relaxation pose, especially for correction of stooping back.");
                break;
                case "Parvatasana":
                    listitem(id,"Parvatasana strengthens the muscles of the arms and legs.");
                    listitem(id,"It tones the spinal nerves and sends good flow of blood to the spinal region.");
                    listitem(id,"It increases blood flow to the brain and gives mild benefits similar to inverted asanas.");
                    listitem(id,"As you stand in the mountain pose in a steady stance with your concentration on a fixed point and breath, you develop sharp focus and serene mind.");
                    listitem(id,"The deep and controlled breathing cultivates prana– the life force that makes the spine agile and helps you maintain your balance in the posture.");
                   
                break;

                case "Shalabhasana":
                    listitem(id,"Strengthens the lower back and tones the organs of pelvic region hence leads to well functioning of stomach, liver and bowels.");
                    listitem(id,"Beneficial for people suffering from back pain, slipped disc and sciatica but only if the condition is not severe.");
                    listitem(id,"Enhances the functioning of abdominal organs particularly of the lower abdomen.");
                    listitem(id,"Practicing this asana tightens and tones the muscles of the buttocks and arouses appetite.");
                break;

                case "Vrikshasana":
                    listitem(id,"Tones and strengthens the muscles of the leg.");
                    listitem(id,"Develops a sense of balance and coordination.");
                    listitem(id,"Warms up the whole body by stretching it from head to toe.");
                    listitem(id,"Improves concentration and calms the mind.");
                    listitem(id,"Since it stretches the leg muscles, it is found to give relief in Sciatica.");
                break;

                case "Makarasana":
                    listitem(id,"Beneficial in cervical, slip disc, spondylitis, sciatica.");
                    listitem(id,"Beneficial in all spine related problems.");
                    listitem(id,"Very useful in Asthama, knee pain, and other lungs related problems.");
                    listitem(id,"This pose is best for relaxing after doing other Asana.");
                break;

                case "Swastikasana":
                    listitem(id,"When done it in the right way, it also helps to improve boost immunity.");
                    listitem(id,"Daily practice of this meditative pose, will improve the concentration level.");
                    listitem(id,"Those people suffering from varicose veins and aching leg muscles can sit in Swastikasana.");
                    listitem(id,"This yoga posture brings smoothness in the eyes and also reducing eye strain.");
                    listitem(id,"Its helps the stretches the calves, spine, and hamstrings");
                    listitem(id,"Rejuvenation of the nervous system");
                break;

                case "Brahma_Mudra":
                    listitem(id,"Regular practicing of Brahma Mudra is recommended to calm a stressed nervous system and soothe the mind.");
                    listitem(id,"This mudra will reduce stress and calm you down as well as release negative energy.");
                    listitem(id,"It also affects the flow of life force energy (prana) in the body.");
                    listitem(id,"Brahma mudra is also believed to helps the yogi reach a higher meditative state.");
                    listitem(id,"It creates a sense of security. This mudra produces peace of mind, assurance, and benevolence.");
                break;

                case "Anantasana":
                    listitem(id,"This pose improves balance and stretches the hamstrings, inner thighs, and calves. Working on balance and core strength are important parts of any yoga practice. ");
                    listitem(id,"While yogis do a lot of standing balances and even arm balances, balancing on your side is pretty rare and offers a really different experience. ");
                    listitem(id,"Better balance will help you throughout your daily life in avoiding injury due to trips and falls. Tight hamstrings and calves are common for runners and those in sports that involve running.");
                break;

                case "Surya_Namaskar":
                    listitem(id,"Helps lose weight. ");
                    listitem(id,"Glowing skin");
                    listitem(id,"Better digestive system.");
                    listitem(id,"Ensures regular menstrual cycle.");
                    listitem(id,"Brings down blood sugar level.");
                    listitem(id,"Improves anxiety.");
                    listitem(id,"Helps your body detox.");
                    listitem(id,"Battles insomnia.");
                break;

                case "Sarvangasana":
                    listitem(id,"The shoulderstand yoga pose is good for the healthy functioning of pituitary, pineal, kidney, liver, spleen and testes. Thus, it regulates the functions of all the glands of the body.");
                    listitem(id,"The asana is good in case of circulatory system, respiratory system and digestive system.");
                    listitem(id,"It enhances the supply of blood to the head region and good for managing headache and migraine.");
                    listitem(id,"It has cooling effect to the nerves, thus beneficial for high blood pressure patient.");
                    listitem(id," It is good for insomnia patient as it facilitates blood supply to this region.");
                    listitem(id," It seems to be panacea for constipation patient. Person suffering from constipation should practice it regularly.");
                    listitem(id," It stimulates the intestinal and stomach glands thus good for ulcer in these region.");
                    listitem(id,"It enhances supply of blood in the head region and prevents hair fall.");
                    listitem(id,"It is good for eye vision.");
                    listitem(id,"It helps to prevent wrinkles, pimples and delay aging.");
                  break;
                  case "Padmasana":
                    listitem(id,"Padmasana is the highly preferred asanas by yoga practitioner in the beginning stage for increasing the focus of mind and concentration. It helps in improving the concentration power and it will calm the brain also.");
                    listitem(id,"This Asana helps to preserve vital fluids in the body and prevents abdominal diseases and female disorders connected with the reproductive organs.");
                    listitem(id,"Doing this Asana gives your mind peace, solitude, and longevity to the practitioner. It increases the hungry and helps to relax the body.");
                    listitem(id,"It can also help in the stretches the ankle and knees. This Asana is the base for all asanas and it strengthens the hip and knee joints of the female and can get painless peaceful mind.");
                    listitem(id," You can reduce the unwanted fat of the hips and the thighs. This is the simplest and easiest asana which can practice by all the age group of men and women they can get benefits of Yoga Asana.");
                  break;
                  case "Matsyasana":
                    listitem(id,"Matsyasana helps to relieve respiratory problems by promoting the right method of breathing. The asana also expands bronchial tubes to promote easier breathing. This makes Matsyasana especially beneficial for asthma patients.");
                    listitem(id,"It helps to stretch the upper body which allows for unrestricted airflow, thereby providing additional oxygen into one’s lungs.");
                    listitem(id,"It improves and stabilizes functioning of the pineal, parathyroid, adrenal, and pituitary glands, thus effectively regulating hormonal functions of the body.");
                    listitem(id,"It stretches the neck and the spine thus removing strain resulting from neck and back pain");
                    listitem(id," The asana helps to instigate nutrient absorption.");
                    listitem(id," When practiced regularly, this asana can bring increased improvement to the skin conditions as well as enhance the throat and facial muscles.");
                    listitem(id," By stretching the neck and chest areas, Matsyasana helps to release tension in neck and shoulders.");
                    listitem(id," The asana can improve flexibility, posture, and digestion, thereby removing problems like constipation.");
                  break;
                  case "Bhujangasana":
                    listitem(id,"Relieves the discomfort in back muscles.");
                    listitem(id,"Doing Bhujangasana for a long run helps with stress and anxiety.");
                    listitem(id,"It helps in relieving menstrual pain and helps with irregularities.");
                    listitem(id,"Massages your digestive system");
                    listitem(id," Improves blood circulation of the body.");
                    listitem(id,"Strengthens your shoulders, upper back and spine.");
                    listitem(id,"It is useful in relief from slipped disc, back pain and sciatica.");
                  break;
                  case "Dhanurasana":
                    listitem(id,"Dhanurasana strengthens the back and abdominal muscles.");
                    listitem(id,"It stimulates the reproductive organs.");
                    listitem(id,"It adds greater flexibility to back muscles.");
                    listitem(id,"It is good stress and fatigue buster.");
                    listitem(id,"It relieves menstrual discomfort and constipation as it massages liver.");
                    listitem(id,"It tones the leg and arm muscles.");
                    listitem(id,"It is helpful for people suffering from kidney disorders.");
                  break;
                  case "Chakrasana":
                    listitem(id,"Increases the flexibility of the body.");
                    listitem(id,"Strengthens the bones and muscles of the body and is mainly beneficial in strengthening the legs.");
                    listitem(id,"strengthens the respiratory system as by doing it, the chest enhances and the lungs get oxygen to its fullest.");
                    listitem(id,"Relives all the stress and tension as it strengthens the nervous system and refreshes the brain.");
                    listitem(id,"Helpful in reducing the fat of the abdomen and to get rid of the bloated belly.");
                    listitem(id,"Beneficial for the digestive system, gastric problems and for all the disorders of the female reproductive system.");
                    listitem(id,"Ensures better functioning of the heart, liver, spleen, and kidneys. Helpful in curing hernia.");
                  break;
                  case "Paschimottanasana":
                    listitem(id,"The asana gives suitable stretches and tones to the spine and one of the best yoga poses for the health of spinal column and associated nerves. Since, it is good for the spinal nerves accordingly safe the whole body.");
                    listitem(id,"This is one of the effective sitting forward bending yoga poses that is good to burn belly fat.");
                    listitem(id,"The practice of this asana gives adequate stretching to the entire body, especially the back part of the body, thus helpful in melting of fat.");
                    listitem(id," The regular practice of the asana gives direct massage to the pelvic region thus helpful for various types of sexual maladies such as menopause, menstrual discomfort, etc.");
                    listitem(id,"It provides adequate massage to pancreas and force the endocrine gland to release insulin, thus ensures in the prevention and management of diabetes.");
                    listitem(id,"The massage of the abdominal organs improves digestion and ensures to prevent constipation and flatulence.");
                    listitem(id,"The practice of this asana is also good for kidney, liver spleen and adrenal glands.");
                    listitem(id,"Paschimottanasana is well known for its utility in harmonizing nervous and pranic energies within the body. Thus, it is quite effective for stress, anxiety, depression and helping to bring about states of meditation.");
                    listitem(id," It is beneficial for hamstrings.");
                    listitem(id,"The asana helps to develop appetite.");
                  break;
                  case "Gomukhasana":
                    listitem(id,"Excellent for inducing relaxation.");
                    listitem(id,"Beneficial in curing sexual ailments.");
                    listitem(id,"Improves the functioning of the kidney.");
                    listitem(id," Induces the flow of energy and refreshes the body.");
                    listitem(id,"Improves the body posture by opening the chest area.");
                    listitem(id,"Helpful in getting rid of stress, tension, fatigue and anxiety.");
                    listitem(id,"Relieves a backache, sciatica, rheumatism, arthritis and joint pain.");
                    listitem(id,"Alleviates the cramps in the legs and strengthen the leg muscles.");
                    listitem(id,"Cure frozen shoulder and helpful in removing the general stiffness of shoulders and neck.");
                  break;
                  case "Patangasana":
                    listitem(id,"Works as a preparatory pose for meditative asanas such as Padmasana (Lotus Pose).");
                    listitem(id,"Practicing this asana gives a good stretch to the groin, inner thighs and knees.");
                    listitem(id,"Enhances bowel and intestine movements.");
                    listitem(id,"Useful for pregnant women for a natural and healthy delivery of the child.");
                    listitem(id,"Regulates irregular menstruation and helpful in getting relief from menstrual discomfort");
                    listitem(id,"Beneficial for people who spend long hours walking and standing by providing relief in lower limbs.");
                  break;
                  case "Trikonasana":
                    listitem(id,"Gives strength to the ankles and knees.");
                    listitem(id,"Tones and massages the pelvic area and the reproductive organs.");
                    listitem(id,"Alleviates muscle cramps and helps in reducing the back and neck pain.");
                    listitem(id,"Stretches the back, neck, thighs, legs, arms and shoulders. Helps in reducing waistline fat.");
                    listitem(id,"Highly beneficial in getting rid of indigestion, constipation, acidity and gastric troubles.");
                    listitem(id,"Gives an intense stretch to the spine and enhances its Strengthens the spinal nerves.");
                    listitem(id,"Removes the stiffness of the neck and shoulders. Beneficial in correcting the misalignment of the shoulders.");
                    listitem(id,"Helpful in getting rid of anxiety and depression as it stimulates the whole functioning of the nervous system.");
                  break;
                  case "Ushtrasana":
                    listitem(id,"Helpful in getting rid of all kinds of back pain.");
                    listitem(id,"Stimulates the functioning of the thyroid gland.");
                    listitem(id,"Makes the neck, back, chest and abdominal regions flexible.");
                    listitem(id,"Stretches pelvic region thus helpful in getting rid of menstrual discomforts.");
                    listitem(id,"Improves digestion and reduces excess fat deposited on the stomach, neck and back.");
                    listitem(id,"Activates the brain cells and makes it function better by improving the blood circulation.");
                    listitem(id,"Beneficial for curing the diseases related to the respiratory system such as Bronchitis and Asthma.");
                  break;
                  case "Ardha_Matsyendrasana":
                    listitem(id,"Increase hips and spine flexibility.");
                    listitem(id,"Removes the wastes and improves digestion");
                    listitem(id,"Stimulate heart, kidneys, liver, spleen and lungs.");
                    listitem(id,"Open the neck, hips and shoulders.");
                    listitem(id,"Relieve fatigue, sciatica, backache and menstrual discomfort.");
                    listitem(id,"Clean the internal organs.");
                    listitem(id,"Releases excess toxins and heat from tissues and organs.");
                    listitem(id,"Energizes and stretches the backbone.");
                  break;
                  case "Halasana":
                    listitem(id,"Modulates the functioning of all internal organs therefore keeps them healthy.");
                    listitem(id,"Aids digestions, alleviate constipation and dyspepsia.");
                    listitem(id,"Rejuvenate adrenal glands and spleen.");
                    listitem(id,"Invigorate immune system.");
                    listitem(id,"Beneficial for the organs of the female reproductive system.");
                    listitem(id,"Regulates the production of insulin thus prevents diabetes.");
                    listitem(id,"Improves the flexibility of shoulders, elbows and wrists.");
                break;
                case "Veerasana":
                    listitem(id,"Balances the mind and improves the concentration power.");
                    listitem(id,"Helpful in stabilizing the functioning of the whole nervous system.");
                    listitem(id,"Highly beneficial for the liver, kidney and all other abdominal organs.");
                    listitem(id,"Practicing the second variation of this asana improves the functioning of the reproductive organs.");
                    listitem(id,"Extremely beneficial for people having disturbed mind as the regular practice of this asana clears up the thought process and helps in getting rid of the habit of over thinking.");
                break;
                case "Ashwa_Sanchalanasana":
                    listitem(id,"Stretches spine therefore increasing the flexibility of the back.");
                    listitem(id,"Strengthens the knee and ankles, opens up groin and hips.");
                    listitem(id,"Strengthens the muscles of the chest hence enhances lung capacity.");
                    listitem(id,"Tones and massages kidney, liver leading to their well functioning.");
                break;
                case "Pavanmuktasana":
                    listitem(id,"This posture releases the muscles of the lower back and relaxes the body.");
                    listitem(id,"This-asana regulates wind in the body.");
                    listitem(id,"It relieves constipation and indigestion.");
                    listitem(id,"It reduces obesity and excessive fat of the abdomen.");
                    listitem(id,"It helps in keeping away the disease of the lungs and the heart.");
                    listitem(id,"For people suffering from wind trouble, acidity and gas formation, it has an instant corrective effect.");
                    listitem(id,"It is also useful in the treatment of impotence, sterility and menstrual problems.");
                break;
                case "Kati_Chakrasana":
                    listitem(id,"his yoga pose is good to give suitable workout in the lower abdomen area thereby helps in shedding fat of this region.");
                    listitem(id,"It is good to improve the flexibility of the spine and effective for spine injuries and disorders. It helps to contract and expand the muscles of neck, back and abdominal wall and give a smooth massage to the entire vertebral column.");
                    listitem(id," It overcomes the problems related with indigestion and constipation. It smooths proper bowel movement.");
                    listitem(id,"It is one of the powerful yoga to make the chest expand and ensures appropriate expanding of lungs. It is good to combat the problems like asthma, cough, tuberculosis, etc.  The twisting and compressing help the person to breathe in a better way thus good for asthmatic condition.");
                    listitem(id,"It strengthens shoulders, neck, arms, back and thighs.");
                    listitem(id,"It helps to ease muscular stiffness that happens due to Parkinson’s and Alzheimer diseases.");
                    listitem(id,"The regular practice of this yogasana is good in treatment of uterus and fallopian tubes problems.");
                    listitem(id,"ontinuous practice of this asana releases pranic energy, acts as a mood elevator.");
                    listitem(id,"It stimulates the nerves criss-crossing the spinal column thus good for the health of the nervous system.");
                    listitem(id,"This is one of the effective yoga poses to burn fat at the waistline region. It is also good in burning of fat of the lower abdomen region. Due to regular practicing of this yoga, the waist become supple and slim.");
                break;
                case "Tadasana":
                    listitem(id,"Tadasana aims to strengthen the thighs, knees and ankles.");
                    listitem(id,"It helps to make the abdomen and the buttocks firm");
                    listitem(id,"It helps to develop good posture.");
                    listitem(id,"It also helps clear one’s mind and calms the nervous system, thereby improving concentration and increasing alertness.");
                    listitem(id,"The pose helps to strengthen the lower part of the body and also the load bearing joints.");
                    listitem(id,"Helpful in keeping the abdominal muscles and nerves toned during the first six months of pregnancy.");
                break;
                case "Ardha_Chakrasana":
                    listitem(id,"Ardha Chakrasana makes your back muscles & spine more flexible.");
                    listitem(id,"Half Wheel Pose tones your shoulders, waist, arms as well as your thighs also.");
                    listitem(id,"It gently massages your intestine along with stretches your abdomen organs, stomach.");
                    listitem(id,"Ardha Chakrasana is best & simplest Asana for reducing belly and your thighs fat.");
                    listitem(id,"Beneficial in mild back pain and kicks out pain from your shoulders & Neck also.");
                    listitem(id,"While you’re performing Half Wheel pose your chest is stretching by this it improves your lungs capacity.");
                    listitem(id,"Best for the diseases related to respiratory. Balances your blood pressure also.");
                    listitem(id,"Ardha Chakrasana cures menstrual related issues.");
                break;
                case "Naukasana":
                listitem(id,"Helps to reduce belly fat.");
                listitem(id,"Improve the function of digestion.");
                listitem(id,"Good for developing six pack ABS.");
                listitem(id,"Regulates the function of pancreas, liver, and lungs.");
                listitem(id,"Strengthens abdominal muscles.");
                listitem(id,"Good for a diabetes patient to maintain the sugar level.");
                listitem(id,"Improves the blood circulation.");
                listitem(id,"Strengthens the muscles of thigh, hips, necks, and shoulder.");
                listitem(id,"Improves the function of kidney, thyroids and prostate glands.");
        break;
                 
            }
        }






        //This function will use listitem function for appending the dos
        function dos()
        {
            var id="do";
            switch(asana_name)
            {
                case "Savasana":
                    listitem(id,"Modify Savasana if you have any lower back issues by placing a pillow");
                    listitem(id,"Do your best to remain relaxed. You should never feel tight or stiff in this pose");
                break;
                case "Vajrasana":
                    listitem(id,"Breathe normally while in the pose, as there would be a tendency to stop doing so.");
                    listitem(id,"The body should be soft and efforts to be made on relaxing the body.");
                break;
                case "Adhvasana":
                    listitem(id,"The most important thing in this asana is to relax your body and empty your mind.");
                    listitem(id,"Try focusing on your breadth");
                break;
                case "Parvatasana":
                    listitem(id,"Equally, distribute the weight in both the feet and toes in alignment with each other.");
                    listitem(id,"Lengthen the spine, soften the stomach, widen the collarbones, and lift the heart towards the sky.");
                break;

                case "Shalabhasana":
                    listitem(id,"Let the breathing and heartbeat return to normal.");
                    listitem(id,"Gently close the eyes, relax the whole body, inhale deeply. This is the starting position.");
                break;

                case "Vrikshasana":
                    listitem(id,"Rest your hands on your hips and lengthen your tailbone toward the floor. Then, press your palms together in prayer position at your chest, with your thumbs resting on your sternum.");
                    listitem(id,"Draw down through your left foot. Press your right foot into your left thigh, while pressing your thigh equally against your foot.");
                break;

                case "Makarasana":
                    listitem(id,"Avoid practicing Vrikshasana in case you suffer from any these condition: vertigo, high or low blood pressure, knee or ankle pain, insomnia, dizziness or a migraine.");
                    listitem(id,"You can fix your gaze all you want, but if your standing leg isn’t “zipped up” then it will be very hard to balance for long periods of time, and let’s face it — Tree pose can be so delicious as a meditation!");
                 
                break;

                case "Swastikasana":
                    listitem(id,"Left foot touching the right thigh from inside, right foot touching left thigh from inside.");
                    listitem(id,"One can fold left leg first or right leg first as per the convenience.");
                    listitem(id,"Eyes closed, hands in Dhyan mudra (meditation gesture)");
                    listitem(id,"Sit with back erect, neck straight, shoulders relaxed, legs bent in knees.");
                 
                break;

                case "Brahma_Mudra":
                    listitem(id,"Perform this pose for 35 minutes at a stretch every day or for 10 to 12 minutes three times a day.");
                    listitem(id,"Remember to wrap your fingers into your thumb. ");
                    listitem(id,"Place your hands with the palms facing upwards on your legs while in padmasana. If you find it difficult to sit in padmasana, you can sit in sukhasana. ");
                    listitem(id,"It is not necessary for doing this at an empty stomach. You may also practice this mudra with a full stomach.");
                
                break;

                case "Anantasana":
                    listitem(id,"Find a point of focus.");
                    listitem(id,"To exit Anantasana, EXHALE slowly, release the right hand holding the right big toe, bend the right knee of the lifted leg towards your torso, and then as you straighten that top leg, slowly lower the lifted right foot to rest on the top of the other (left) foot, or right toes can touch the floor as that top right leg rests just in front of the bottom left leg for better balance. ");
                break;

                case "Surya_Namaskar":
                    listitem(id,"Find a point of focus.");
                    listitem(id,"To exit Anantasana, EXHALE slowly, release the right hand holding the right big toe, bend the right knee of the lifted leg towards your torso, and then as you straighten that top leg, slowly lower the lifted right foot to rest on the top of the other (left) foot, or right toes can touch the floor as that top right leg rests just in front of the bottom left leg for better balance. ");
                break;

                case "Sarvangasana":
                    listitem(id,"Keep the legs straight in knees with toes pointing to the sky. ");
                    listitem(id,"Raise the entire back & buttocks off the ground. ");
                    listitem(id,"Legs, hips and back are in one straight line.");
                    listitem(id,"Hands, upper arm & elbows on the ground while supporting the back behind chest. ");
                    listitem(id,"Shoulders resting on the ground. ");
                    listitem(id,"Head straight and eye sight fixed on the raised toes.");
                    listitem(id,"The chin resting in the sternal notch. (In Chin lock position)");
                break;
                case "Padmasana":
                    listitem(id,"It’s good to do this pose in the morning with empty stomach.");
                    listitem(id,"Practise this yoga daily, will yield the better results.");
                    listitem(id,"Keep the head straight and spine erect.");
                    listitem(id,"Make sure that both legs are crossed and foot placed on the opposite thighs.");
                break;
                case "Matsyasana":
                    listitem(id,"The pose should be performed only under the close observation of an experienced yoga teacher.So as you have acquainted yourself with the various intricate aspects of Matsyasana yoga poses, go ahead and practice this asana for physical and emotional well being.");
                    listitem(id,"Lift the head with the support of hands, elbows.");
                    listitem(id,"Try to rest the crown of the head on the ground.");
                    listitem(id,"While taking, releasing & maintaining the position, support the head and neck very carefully.");
                    listitem(id,"Try to keep soft cushion under the head.");
                break;
                case "Bhujangasana":
                    listitem(id,"Bend arms, fingers together and pointing forward with palms on ground.");
                    listitem(id,"Toes, heels, knees together as far as possible, toes pointing backwards");
                    listitem(id,"Looking at the sky.");
                    listitem(id,"Elbows and hands close to the body.");
                    listitem(id,"Open the chest, pull the shoulders backwards and downwards.");
                    listitem(id,"You can lift the palms off the ground, if you can maintain the steady position ");
                break;
                 case "Dhanurasana":
                    listitem(id,"Hold the ankles with hands and pull them towards head at the same time try to bend the head backwards looking to the sky.");
                    listitem(id,"Also pull the arms with legs pushing backwards.");
                    listitem(id,"Try to balance on the abdomen.");
                    listitem(id,"Keep the knees, thighs off the ground; one can keep about 1 foot distance between knees.");
                    listitem(id,"Open the chest and pull the shoulders back. ");
                break;
                case "Chakrasana":
                    listitem(id,"Keep the breathing slow and rhythmic. Keep the shoulder blades and neck region relaxed and comfortable. Keep the facial muscles soft and relaxed. Keep the arms and knees straight. Keep some distance between the feet for better support and balance while in the pose. Respect and find acceptance with the body, by not pushing yourself into the pose.");
                break;
                case "Paschimottanasana":
                    listitem(id,"As per your practice, you may increase the number of rounds as well as duration of maintaining the pose.");
                    listitem(id,"While bending forward, do exhaling.");
                    listitem(id,"Toes should remain together pointing forward.");
                    listitem(id,"Try to touch the forehead to the knees and elbows to the ground. ");
                break;
                case "Gomukhasana":
                    listitem(id,"It is best if the Gomukhasana is performed first thing in the morning. Its benefits are numerous. Your stomach and bowels must be empty when you practice this asana. Make sure you have your meals at least 10 to 12 hours before your practice.");
                break;
                case "Patangasana":
                    listitem(id,"If you are suffering from groin or knee injury, make sure you keep a blanket under the outer thighs for support. Do not perform this pose without blanket support. Also, sciatica patients should either completely avoid the pose or sit on a cushion to raise the hips. If you have any lower-back disorders, do the posture only while keeping the spine erect. Avoid rounding up the spine by bending forward.");
                break;
                case "Trikonasana":
                    listitem(id,"Left leg placed to the left of the body at distance of about 4 to 5 feet (Distance depends on individual height and ability to stretch the body ");
                    listitem(id,"Left leg bent in knee so that the thigh and calf make 90 degree angle with each other the thigh will be parallel with the ground ");
                    listitem(id,"Left foot turned to the left side making 90 deg angles to the right foot and right leg stretched to the right, the right foot pointing forward.");
                    listitem(id,"Try to align head with the right arm, with the right ear touching the right upper arm.Place the left hand on the ground parallel and close to the left foot, fingers pointing the same direction as the toes. ");
                    listitem(id,"Keep both the heels on the ground. ");
                    listitem(id,"Stretch the entire body to left side while maintaining the balance.");
                break;
                case "Ushtrasana":
                    listitem(id,"Come to your knees, with your legs hip-width apart. Place your hands on your hips, with your thumbs on your sacrum, the bony plate at the base of your spine. Keep your hips over your knees and internally rotate your thighs, squeezing them toward each other.");
                    listitem(id,"Inhale to engage your lower belly and reach your tailbone toward your knees, creating space between your lower vertebrae.");
                    listitem(id,"Keep your chest raised, your core engaged, your spine long, and your chin tucked as you drop your hands toward your heels.");
                    listitem(id,"Press the heels of your hands into the heels of your feet while draping the fingers over the soles. Keep lifting through your sternum.");
                    listitem(id,"Now lift your shoulders to allow the trapezius muscles between the shoulder blades to rise up and cushion your cervical spine. Gently lower the head and neck and gaze at the tip of your nose.");
                break;
                case "Ardha_Matsyendrasana":
                    listitem(id,"There are many ways you can place your arms to increase and decrease the stretch. But to do it simply, you can place the right hand behind you, and the left hand on the right knee.");
                    listitem(id,"This asana must be practiced either first thing in the morning or at least four to six hours after a meal. Your stomach and bowels must be empty when you practice this asana. The food must be digested so that there is enough energy to expend during the practice.");
                break;
                case "Halasana":
                    listitem(id,"Keep the legs straight in knees with toes vertical on the ground over your head.");
                    listitem(id,"Raise the entire back & buttocks off the ground");
                    listitem(id,"Legs are in one straight line");
                    listitem(id,"As far as possible, the back remains straight & vertical.");
                    listitem(id,"Arms straight with palms on the ground.");
                break;
                case "Veerasana":
                    listitem(id,"Left leg placed straight in front of the body.");
                    listitem(id,"Right leg stretched behind, the right foot at 45 deg angle to the left foot. ");
                    listitem(id,"Bend the left leg to a 90 degree angle so the thigh is parallel with the floor.");
                    listitem(id,"Raise the arms straight over head with palms joined in Namaskar position.");
                    listitem(id,"Take the arms backwards as far as possible ");
                    listitem(id,"Pull the shoulders back, open the chest.");
                    listitem(id,"Keep both the heels on the ground. ");
                break;
                case "Ashwa_Sanchalanasana":
                    listitem(id,"Exhale bring your right foot in between your palms. Rest your foot evenly on the ground and bend your right knee at a 90 degrees angle. Your right foot, shin and knee should be in one straight line. If possible, try to make your right thigh parallel to the ground. Your left heel will automatically point towards the ceiling. Try not obstruct your overall movement. Alignment is very important in Yoga to maximize the benefits of the Asanas.");
                break;
                 case "Pavanmuktasana":
                    listitem(id,"Keep the legs folded in knees and pressed on the abdomen using the folded arms. ");
                    listitem(id,"Try to touch the chin to the knees.");
                    listitem(id,"Try to keep the legs together.");
                    listitem(id,"Point the toes.");
                break;
                case "Kati_Chakrasana":
                    listitem(id,"Perform it 5 to 10 times or up to two minutes.");
                    listitem(id,"Both the arms should be out-stretched in front of the chest while palms are facing to each other. It should be ensured that distance between the arms remain constant.");
                    listitem(id,"With exhale, swing the arms to the right side as far as possible by making waist rotation. Maintain the pose as long as you can. With inhale, bring your arms before the chest.");
                    listitem(id,"The same thing may be followed while bending your arms towards the left side.");
                break;
                case "Tadasana":
                    listitem(id,"Initially you can stand at hip- distance apart and then start by bringing your legs closer soon that you start getting a balance in your body.");
                    listitem(id,"Try and fix your alignment each time you start holding the pose after you have come back to the initial position.");
                    listitem(id,"Close your eyes while practising this posture and you will soon be able to understand how to do tadasana perfectly.");
                    listitem(id,"To find good hold and balance of your weight and body you can realign yourself by leaning forward and then back bending and then moving right and left. This helps you to find the centre of balance across your feet as well.");
                break;
                case "Ardha_Chakrasana":
                    listitem(id,"Perform Tadasana by raising your hands while you’re inhaling. Attempt Tadasana for 2 to 3 times.");
                    listitem(id,"After performing Mountain Pose, just place your both hands on the back side of your hips.");
                    listitem(id,"Breathe in and try to slowly backbend your upper body (bend as much as you can). Remember one most important thing is that, don’t bend your knees.");
                break;
                case "Naukasana":
                listitem(id,"Keep a healthy diet and maintain a healthy routine.");
                listitem(id," Though you can do yoga anytime, a fixed time helps you to maintain a routine.");
                listitem(id,"You can start yoga practice with a stiff or nonflexible body too. Yoga will make it flexible steadily.");
        break;
            }
        }











        //This function will use listitem function for appending the donts
        function donts()
        {
            var id="dont";
            switch(asana_name)
            {
                case "Savasana":
                    listitem(id,"Don’t strain, this pose is about relaxation. Doing so will add stress to your back and other parts of your body.");
                    listitem(id,"Don’t skip Savasana! It’s usually the last pose of your yoga routine. It allows your body to cool down after your workout.");
                break;
                case "Vajrasana":
                    listitem(id,"Don’t tense up the whole body while lifting the legs off the ground and maintaining it.");
                break;
                case "Adhvasana":
                    listitem(id,"Do not increase the time for this asana suddenly. Gradual increase provides good results.");
                break;
                case "Parvatasana":
                    listitem(id,"Lift the buttocks off the ground. Bend the elbows. Bend the neck forward. Overstrain the knees.");
                break;

                case "Shalabhasana":
                    listitem(id,"Do not strain the body while performing this asana.");
                    listitem(id,"Don’t bend the knees or raise the chin above the floor.");
                break;

                case "Vrikshasana":
                    listitem(id,"Letting the bent knee's hip joint raise higher is a natural response from your body in any version of Tree Pose, but it creates misalignment in your sacrum and low back which then travels all the way up your body.");
                break;

                case "Makarasana":
                    listitem(id,"Avoid practicing Vrikshasana in case you suffer from any these condition: vertigo, high or low blood pressure, knee or ankle pain, insomnia, dizziness or a migraine.");
                    listitem(id,"You can fix your gaze all you want, but if your standing leg isn’t “zipped up” then it will be very hard to balance for long periods of time, and let’s face it — Tree pose can be so delicious as a meditation!");
                 
                break;

                case "Swastikasana":
                    listitem(id,"Do not hunch your back");
                    listitem(id,"Do not strain the hands or arms, keep them relaxed.");
                    listitem(id,"Do not overstrain the knees.");
                break;

                case "Brahma_Mudra":
                    listitem(id,"Do not strain the body while performing this asana.");
                    listitem(id,"Do not perform this mudra for too long");
                    listitem(id,"Do not increase the time for this asana suddenly. Gradual increase provides good results.");
                break;

                case "Anantasana":
                    listitem(id,"This posture should be avoided in case of slipped disc or cervical spondylitis. In cases of sciatica, guidance of an expert is a must.");
                    listitem(id,"May aggravate headaches or diarrhea;");
                    listitem(id,"Do not collapse into that shoulder, but keep that shoulder relaxed and your neck long.");
                break;

                case "Surya_Namaskar":
                    listitem(id,"This posture should be avoided in case of slipped disc or cervical spondylitis. In cases of sciatica, guidance of an expert is a must.");
                    listitem(id,"May aggravate headaches or diarrhea;");
                    listitem(id,"Do not collapse into that shoulder, but keep that shoulder relaxed and your neck long.");
                break;

                case "Sarvangasana":
                    listitem(id,"Do not bend the legs in knees. ");
                    listitem(id,"Do not take the legs over your head in the position, but you can take the legs over your head while taking & releasing the position.");
                    listitem(id,"Do not move the neck or overstrain it in chin lock position.");
                break;
                case "Padmasana":
                    listitem(id,"People with severe back pain, ankle pain, sprain in the leg and knee enjuiry should not perform this asana.");
                break;
                case "Matsyasana":
                    listitem(id,"Do not move or pull or turn the neck while you are in the position.");
                    listitem(id,"Do not remove the support of the elbows to neck.");
                break;
                case "Bhujangasana":
                    listitem(id,"Do not have any distance between the legs.");
                    listitem(id,"Don’t let the shoulders hunch upwards towards ears.");
                    listitem(id,"Don’t let the elbows point away from the body.");
                break;
                case "Dhanurasana":
                    listitem(id,"Do not bend the arms.");
                    listitem(id,"Do not drop the head.");
                break;
                case "Chakrasana":
                    listitem(id,"Exert excessive force, which may cause undue strain onto the arms while lifting the body up into the position. Force yourself into getting the arch in the spine. Strain and tense up the body while moving into the pose and/or while doing the pose.");
                break;
                case "Paschimottanasana":
                    listitem(id,"Do not bend the legs in knees.");
                    listitem(id,"Do not overstrain the neck while bending forward.");
                break;
                case "Gomukhasana":
                    listitem(id,"Don't stick out your front ribs while your hands are clasped behind your back. The hand in contact with your thoracic spine triggers a lifting of the heart and a sense of lifting and spreading in the upper back, but these sensations are lost if the front ribs jut out. Instead, focus on broadening the low back and dropping the coccyx down and forward to soften the front ribs and lift the center point of the pelvic floor.");
                break;
                case "Patangasana":
                    listitem(id,"Don't stick out your front ribs while your hands are clasped behind your back. The hand in contact with your thoracic spine triggers a lifting of the heart and a sense of lifting and spreading in the upper back, but these sensations are lost if the front ribs jut out. Instead, focus on broadening the low back and dropping the coccyx down and forward to soften the front ribs and lift the center point of the pelvic floor.");
                break;
                case "Trikonasana":
                    listitem(id,"Do not bend the arms in elbows.");
                    listitem(id,"Do not overstrain your left knee.");
                    listitem(id,"Do not bend the right leg in knee.");
                    listitem(id,"Do not try to align the left foot and right foot in one line.");
                    listitem(id,"Do not lift the sole of the back foot off the ground");
                    listitem(id,"Do not lose the balance. ");
                break;
                case "Ushtrasana":
                    listitem(id,"Don’t pinch the shoulders together, tensing the neck.");
                    listitem(id,"Don’t crunch the lower back by squeezing the butt, pushing the knees wider than hip-width apart, or pooching the belly.");
                break;
                case "Ardha_Matsyendrasana":
                    listitem(id,"Don't forget to distribute the twist evenly throughout the entire length of the spine");
                    listitem(id,"Don't concentrate it in the lower back. Stay for 30 seconds to 1 minute, then release with an exhalation, return to the starting position");
                break;
                case "Halasana":
                    listitem(id,"Do not bend the legs in knees.");
                    listitem(id,"Do not move the neck or overstrain it in chin lock position.");
                break;
                case "Veerasana":
                    listitem(id,"Do not bend the arms in elbows and the right leg in knee.");
                    listitem(id,"Do not try to align the left foot and right foot in one line.");
                    listitem(id,"Do not lose the balance.");
                break;
                case "Ashwa_Sanchalanasana":
                    listitem(id,"Do not look upward instead look straight in the position,if you are suffering from neck problem");
                    listitem(id,"Avoid practicing the pose if you are having any knee or ankle injury.");
                    listitem(id,"Don’t perform or stretch beyond your limit as it may strain the muscles.");
                break;
                case "Pavanmuktasana":
                    listitem(id,"Do not strain your neck.");
                break;
                case "Kati_Chakrasana":
                    listitem(id,"Don’t practice it if one is having slip disc.");
                    listitem(id,"It shouldn’t be performed after abdominal surgery.");
                    listitem(id,"Skip this asana while experiencing spinal injuries.");
                    listitem(id,"Avoid practicing it during cervical spondylitis.");
                    listitem(id,"One shouldn’t perform Katichakrasana during pregnancy.");
                    listitem(id,"High Blood Pressure patients should perform this asana very cautiously as they may experience giddiness or faintness.");
                break;
                case "Tadasana":
                    listitem(id,"People with medical conditions should not at all practise the tadasana yoga posture. Also if you have a problem of being dizzy or light headed then you should actually stay away from this. Also do not stretch yourself beyond limits when you are doing yoga. It is very important that your body and limbs are relaxed while you practise yoga postures");
                break;
                case "Ardha_Chakrasana":
                    listitem(id,"In the neck, spinal or hip injury avoid Half Wheel Pose. Those people who have Vertigo be very cautious during Practice. Patients of very high B.P. should not attempt Half Wheel Pose. Those poses, which puts any type of strain on Foetus should not be performed by pregnant women.");
                break;
                case "Naukasana":
                listitem(id,"If you feel uneasy during asana practice and want to quit, do it. However, you should know the difference whether the uneasiness is due to the new asana or some physical injury. It is not uncommon to feel slightly uneasy while practicing a new asana.");
                listitem(id,"Do not exert your body for a yoga practice at once. Keep it gradual and steady.");
        break;
            }
        }









        // A small paragraph for the asana's tips
        function tips()
        {
            var id="tip";
            switch(asana_name)
            {
                case "Savasana":
                    document.getElementById(id).innerHTML="This pose may seem easy to perform, Savasana is one of the hardest poses to master. Although this pose doesn’t require as much flexibility or physical strength, Savasana emphasizes your self-control while challenging your body, mind, and spirit.";
                break;
                case "Vajrasana":
                    document.getElementById(id).innerHTML="Joint pain sufferers should consult a Yoga expert before practicing the Vajrasana. Also, Before you start a yoga program, check with your doctor.";
                break;
                case "Adhvasana":
                    document.getElementById(id).innerHTML="------";
                break;
                case "Parvatasana":
                    document.getElementById(id).innerHTML=" Lengthen the spine from the crown of the head and strongly engage your core muscles. Also,Open the chest towards the ceiling and draw the shoulder blades back and down.";
                break;

                case "Shalabhasana":
                    document.getElementById(id).innerHTML="Only raise the legs as far as it is comfortable, do not allow the legs to tremble. Advanced variation: Arms inserted below the thighs with palms facing downwards or upwards if that is uncomfortable to help raise the legs more. Another variation is to have the hands together with fingers interlocked, supporting on the ground.";
                break;

                case "Vrikshasana":
                    document.getElementById(id).innerHTML="Don’t be surprised if you find yourself falling out of the posture. For beginners, it will be hard to maintain the balance. To make the pose easier,  instead of raising the arms you may keep the hands to your chest in namaste gesture. Follow the steps slowly and keep trying again and again. Just in a few days, you will be able to find your balance.";
                break;

                case "Makarasana":
                    document.getElementById(id).innerHTML="Practice this asana for as long as you find it comfortable. Generally, a few minutes are enough. The main points of effect in this asana’s both variations are the neck and the lower back. In case both the elbows are too apart in the front, the strain will be experienced and felt in the neck; but in case both the elbows are drawn too much closer towards the chest, the strain will be experienced and felt in the lower back. The balance of both these points is very important. That’s why, both the elbows should be placed carefully. The state is ideal when the full spine is well-relaxed.";
                 
                break;

                case "Swastikasana":
                    document.getElementById(id).innerHTML="Catch your left foot by the toes and try to pull it up and place it between the right calf and thigh. Your knees have to firmly touch the floor. Maintain the pose so that you feel relax. Your body and trunk should erect.";
                 
                break;

                case "Brahma_Mudra":
                    document.getElementById(id).innerHTML="Take proper guidance from a guru or a yoga teacher before you start practising the mudras.";
                 
                break;

                case "Anantasana":
                    document.getElementById(id).innerHTML="Keep your bottom heel, hip, and elbow in a straight line.When the top leg lifts, there is a tendency for the pelvis and the lower leg to roll backward; adjust this by balancing through the hip region, rather than rotating the spine.If your buttocks stick out behind you, draw your sacrum into your body and you ground yourself through your pelvis and lengthen through the bottom leg."
                break;

                case "Surya_Namaskar":
                    document.getElementById(id).innerHTML="Keep your bottom heel, hip, and elbow in a straight line When the top leg lifts, there is a tendency for the pelvis and the lower leg to roll backward. adjust this by balancing through the hip region, rather than rotating the spine. If your buttocks stick out behind you, draw your sacrum into your body and you ground yourself through your pelvis and lengthen through the bottom leg."
                break;

                case "Sarvangasana":
                    document.getElementById(id).innerHTML="Until perfect balance is secured, one may take the aid of any object against which to fall back. In the beginning, improvise this pose by resting against a wall or any solid object while in the head-low position. The aid of a few pillows or personal assistance from another person should be acceptable during the initial practice."
                break;

                case "Padmasana":
                    document.getElementById(id).innerHTML="Incorporating any Mudra while sitting in Padmasana, will deepen the mind. The preferred Mudra for the Padmasana are Bhrama mudra, Chinmayi mudra, Chin mudra and Adi mudra."
                break;
                case "Matsyasana":
                    document.getElementById(id).innerHTML="The best time to do this asana is during the early morning. However, you can also practice this asana during the evening as well. As a beginner, you may feel some discomfort while practicing Matsyasana as you may inadvertently strain your neck. So in case you experience any pain in the throat or neck area, lower your chest somewhat closer towards the ground surface or just keep a thick blanket under your head. If you want, you can also use the help of a partner who can offer additional support to your body. This can help you to master this yoga pose for the neck for more easily."
                break;
                case "Bhujangasana":
                    document.getElementById(id).innerHTML="Forward bends are associated with softness and surrender. Try practicing Cobra with a quiet sense of introspection to temper your willpower and remind you that yoga is always about balance and contentment."
                break;
                case "Dhanurasana":
                    document.getElementById(id).innerHTML="Sometimes beginners find it difficult to lift their thighs away from the floor. You can give your legs a little upward boost by lying with your thighs supported on a rolled-up blanket."
                break;
                case "Chakrasana":
                    document.getElementById(id).innerHTML="You can maintain this Chakrasana pose for 30 seconds to 3 minute as per your individual requirements or capacity.Breath-in as raise your body in to Chakrasana position, breath-out as you are coming down and bend your legs and arms slowly, bend the chin towards your chest, as well as gently release your shoulders, waist, buttocks and head onto ground. Finally, you can breathe and relax normally."
                break;
                case "Paschimottanasana":
                    document.getElementById(id).innerHTML="To perform paschimottanasana technically right is not an easy task. It requires practice of weeks and months. On the other hand, one shouldn’t bend forward beyond a certain limit otherwise it can cause severe back pain. Initially, one should bend forward as far as he feels comfortable. After developing back flexibility and back muscle suppleness, one will be able to perform paschimottanasana."
                break;
                case "Gomukhasana":
                    document.getElementById(id).innerHTML="For those who have tight shoulders, it can be difficult for you to effectively clasp your fingers right behind your back. To help yourself in this regard, you can use a strap that makes this process a lot easier. Start performing the pose by having a strap draped evenly over the shoulder of your lower arm. Now slide lower arm to your back and then grip the strap’s free end with your upper arm. Make sure that you try and slide your other arm as far as possible towards the top of your back."
                break;
                case "Patangasana":
                    document.getElementById(id).innerHTML="For those who have tight shoulders, it can be difficult for you to effectively clasp your fingers right behind your back. To help yourself in this regard, you can use a strap that makes this process a lot easier. Start performing the pose by having a strap draped evenly over the shoulder of your lower arm. Now slide lower arm to your back and then grip the strap’s free end with your upper arm. Make sure that you try and slide your other arm as far as possible towards the top of your back."
                break;
                case "Trikonasana":
                    document.getElementById(id).innerHTML="Try using a block under your bottom hand and keep the torso over the line of the leg. This will keep both the side waists long and the breath free.Keep the knee of the leading leg soft. You should be able to bend it easily.If your shoulder is very tight and it's difficult to raise your top arm, take your hand to your hip and open the chest by lifting the elbow to the sky."
                break;
                case "Ushtrasana":
                    document.getElementById(id).innerHTML="As you extend your spine backward, you have to learn to distinguish between muscular and emotional intensity and between safe physical challenges and unsafe joint pain. Use your breath to cultivate a clear, calm mind, which can help you focus on and detect subtle sensations, such as strain within, rather than letting your ego be the driver of your asana practice, which can force your body into an aesthetic shape for which you may not be ready."
                break;
                case "Ardha_Matsyendrasana":
                    document.getElementById(id).innerHTML="When practicing ardha matsyendrasana, if you feel like you're going to tip over, or your back is rounding, place a block or blanket underneath your hips. This should enable the pelvis to tip forward, making it easier to feel stable and prevent the back from rounding."
                break;
                case "Halasana":
                    document.getElementById(id).innerHTML="The best way to do this asana is to place folded blankets under your shoulders. This lends some support to your upper body and neck. And about Breathing, Inhale and hold on to your breath while you get into the pose. Exhale and then steady your breath while in the pose. When you want to resume your earlier position, breathe and hold on to it again."
                break;
                case "Veerasana":
                    document.getElementById(id).innerHTML="Often the inner top feet press more heavily into the floor than the outer top feet. Press the bases of your palms along the outer edges of the feet and gently push the pinky-toe sides of the feet to the floor."
                break;
                case "Ashwa_Sanchalanasana":
                    document.getElementById(id).innerHTML="Equestrian pose can be modified for those with knee problems by lifting the back knee or placing a blanket or cushion underneath it. If it is uncomfortable for the neck, the head does not have to be lifted in this posture."
                break;
                case "Pavanmuktasana":
                    document.getElementById(id).innerHTML="It is best to practice this asana first thing every morning so that all the trapped gases in your digestive tract are released. This should also be one of the first asanas you practice as once the gases are released, it will make practicing other asanas easier. Yoga must be practiced at least four to six hours after a meal, when your stomach and bowels are both empty."
                break;
                case "Kati_Chakrasana":
                    document.getElementById(id).innerHTML="Keep your movements slow and graceful. Avoid moving your body with a jerk. You get better benefits when you coordinate your movements gracefully with the breath."
                break;
                case "Tadasana":
                    document.getElementById(id).innerHTML="Stretch your shoulders, arms and chest upwards while your toes bear your body weight. Feel the stretch in your body from the head to the feet. Hold this pose for about 5 to 10 seconds and then gently exhale. "
                break;
                case "Ardha_Chakrasana":
                    document.getElementById(id).innerHTML="If you are worried about to perform full wheel pose, then attempt Ardha Chakrasana in place of performing Chakrasana. Half wheel Pose is simple and easy to perform Asana. Ardha Chakrasana is helpful for those who are not comfortable with Full Wheel Pose (Chakrasana). First, try half wheel Pose and once you’ll get enough flexibility on your back then go for Chakrasana."
                break;
                case "Naukasana":
                    document.getElementById(id).innerHTML="If you are worried about to perform full wheel pose, then attempt Ardha Chakrasana in place of performing Chakrasana. Half wheel Pose is simple and easy to perform Asana. Ardha Chakrasana is helpful for those who are not comfortable with Full Wheel Pose (Chakrasana). First, try half wheel Pose and once you’ll get enough flexibility on your back then go for Chakrasana."
                break;
            }
        }