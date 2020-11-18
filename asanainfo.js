//name=The name of the asana.
        //The sanskrit name of the asana is the name being fetched from localStorage and acting globally
        //meaning=Meaning of the name of the asana
        
        
        function titles(name,meaning)
        {
            var nameid="asana-name";
            var snameid="sanskrit-name";
            var meaningid="asana-meaning";
            document.getElementById(nameid).innerText=name;
            document.getElementById(snameid).innerText=asana_name.replace(/_/g," ");
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
            switch(asana_name)
            {
                //**************************************************************** Beginners Asana **************************************************************//
                case "Shavasana":
                    listitem(id,"Support Your Legs on a Chair");
                    listitem(id,"Support Your Back and Head with Folded Blankets");
                    listitem(id,"Shavasana");
                break;
                case "Vajrasana":
                    listitem(id,"Keep the soles of the feet on both sides of the anus i.e. place the thighs on the legs one over the other and the soles on the buttocks.");
                    listitem(id,"The part from the toe to the knee should touch the ground. The whole burden of the body is put on the knees and ankles.");
                    listitem(id,"Keep the spine straight and close the eyes.");
                    listitem(id,"Keep the right palm on right knee and left palm on left knee. Inhale slowly then exhale.");
                    listitem(id,"Initially, start by sitting in this posture for 5 minutes. Gradually increase the time for 15 minutes.");
                break;
                case "Adhvasana":
                    listitem(id,"In the prone position place your forehead on ground.");
                    listitem(id,"Stretch your hands forward and join them ahead of your head.");
                    listitem(id,"Stretch your legs in opposite direction.");
                    listitem(id,"Relax all the muscles.");
                    listitem(id,"Continue normal breathing.");
                break;
                case "Parvatasana":
                    listitem(id,"Sit in Vajrasana and keep your spine and neck straight.");
                    listitem(id,"Lose your eyes gently and inhale raising both the hands above the head.");
                    listitem(id,"Join the palms in namaskar mudra. Elbows should be straight and hands stretched upwards. Breathing should be slow and deep. Feel the beat of the heart.");
                    listitem(id,"Return to normal position while exhaling. This asana can be performed three to four times.");
                break;
                case "Makarasana":
                    listitem(id,"Lie down straight on your stomach.");
                    listitem(id,"Now join your elbows, making a stand and place your palmunder the chin.");
                    listitem(id,"Lift your chest up and Keep your elbows and legs together.");
                    listitem(id,"During inhaling, first fold your one leg at a time and theboth the legs together.");
                    listitem(id,"While exhaling, your feet should be straight and keep youhead steady.");
                break;
                case "Swastikasana":
                    listitem(id,"Take a seated position on the floor, sitting erect.");
                    listitem(id,"Read both the legs in front of you a feet apart.");
                    listitem(id,"Now, bend left leg from the knee such that the sole of youleft foot rests on the inner side of the right thigh.");
                    listitem(id,"Bend right leg from the knee and place the foot in betweethe thigh and the calf of the left leg.");
                    listitem(id,"Rest the wrists of both the hands on respective knees wityour spine erect. Breathe normally.");
                break;
                case "Brahma_Mudra":
                    listitem(id,"First of all, sit in any comfortable seating posturand place the hands with palm pointing upwards on the thighs or the knees.");
                    listitem(id,"Meditation postures like Padmasana, SiddhasanaSwastikasana, Vajrasana, etc. are ideal for the practice of mudras.");
                    listitem(id,"Close your eyes and take some deep breaths with thawareness of the breathing process.");
                    listitem(id,"Now fold your thumb and thumb is placed at the base othe small finger.");
                    listitem(id,"Then remaining fingers curl over the thumb, puttinpressure over the outer thumb and making a gentle fist.");
                break;
                case "Halasana":
                    listitem(id,"Lie flat on the floor keeping the arms by the side of the body. Palms facing downward and legs together. Relax the body taking a few deep and slow breaths.");
                    listitem(id,"Using the strength of your abdominal muscles, slowly lift the legs off the ground until they are perpendicular to the floor. Keep the legs straight and together.");
                    listitem(id,"Gently press your arms against the floor and raise your buttocks. Continue to roll the spine till your big toes reach the ground over your head. Don’t force your feet to touch the ground. Keep the legs straight.");
                    listitem(id,"Try to keep the spine as straight as possible. Ideally, the spine is perpendicular to the floor in the final position. A beginner can take the support of arms by placing the hands behind the ribcage to support the back.");
                    listitem(id,"Bring your arms closer and interlock the fingers of both of your hands. If this feels tough, simply keep the arms closer and join the thumps.");
                    listitem(id,"In the final position, the chin is tucked in the center of collar bones. However, it takes time to achieve this position. Don’t force yourself into it as that may strain the muscles of your neck.");
                    listitem(id,"Stretch the legs and arms in the opposite direction. Hold the pose for around 15 seconds to a minute depending on how long you feel comfortable. Take slow and deep breaths.");
                    listitem(id,"To release the pose, gently lower the spine and bring the legs in vertical position. Slowly lower the legs to the ground. Relax the whole body.");
                break;
                case "Vashishtasana":
                    listitem(id,"To begin this asana, start with the Plank Pose or the Phalakasana.");
                    listitem(id,"Gently shift your weight on the right side from your arm to foot.");
                    listitem(id,"Swing your left arm and left foot over and rest the left foot on the right foot as your left arm rests on your hip.");
                    listitem(id,"Place your right hand slightly ahead of the shoulder, and not below it. Make sure that the palm is pressed against the floor, and the arm is absolutely straight.");
                    listitem(id,"Inhale and raise your left arm such that it is perpendicular to the floor. Let your fingers point towards the ceiling.");
                    listitem(id,"As you hold the pose for a few seconds, turn your gaze to your raised arm and look at the fingertips");
                    listitem(id,"Exhale and lower your arm such that it rests on your hip.");
                    listitem(id,"Come back to the plank pose. Inhale, and as you exhale, repeat this pose on your left side.");
                break;
                case "Mayurasana":
                    listitem(id,"Start this pose by sitting on your heels. Keep some distance between your both knees.");
                    listitem(id,"Keep your hands on the ground with fingers points towards your body. Slowly bend your elbows and press them towards your belly.");
                    listitem(id,"Keep your abdomen firm. For this place your head on the ground, and work up the quality in your stomach.");
                    listitem(id,"Now stretch your legs out, in a way that your knees are straight and your feet are facing the floor.");
                    listitem(id,"Keep your shoulder bones strong and pushed into your back. Fix your bum and lift your head and look forward.");
                    listitem(id,"Move your body weight forward and raise your legs from the ground. Lift your body by your hands and it should be parallel to the ground.");
                    listitem(id,"Remain in this pose about 30 seconds and you can increase the holding time about one minute by daily practice.");
                    listitem(id,"After that put your head and feet on the floor and release the pose.");
                break;
                case "Anantasana":
                    listitem(id,"Begin by lying on your back.");
                    listitem(id,"Stretch your right arm to the back of your mat. Roll over onto your right side. Your head will rest on your upper arm.");
                    listitem(id,"Bend your right arm and lift your head. Bring your right hand to cup and support your head with the fingers pointing toward your chin.");
                    listitem(id,"Flex both feet. Keep them flexed throughout this pose.");
                    listitem(id,"Try to keep your whole body in one line from elbow to heels. Don't tip forward or backward.");
                    listitem(id,"Bend your left knee and take hold of the big toe with your left hand in a yogi toe lock. (This may be where things get really tippy.)");
                    listitem(id,"Straighten your left leg toward the ceiling as much as possible.");
                    listitem(id,"Maintain your balance on your side without rolling.");
                    listitem(id,"Release your toe and roll to your back. Repeat the pose lying on your left side.");
                break;
                case "Malasana":
                    listitem(id,"Squat with your feet as close together as possible. (Keep your heels on the floor if you can)");
                    listitem(id,"Separate your thighs slightly wider than your torso.");
                    listitem(id,"Exhaling, lean your torso forward and fit it snugly between your thighs.");
                    listitem(id,"Press your elbows against your inner knees, bringing your palms to together in Anjali Mudra.");
                    listitem(id,"press your inner thighs against the sides of your torso. Reach your arms forward, then swing them out to the sides and notch your shins into your armpits.");
                    listitem(id,"Press your finger tips to the floor, or reach around the outside of your ankles and clasp your back heels.");
                    listitem(id,"Hold the position for 30 seconds to 1 minute, then inhale, straighten the knees, and stand into Uttanasana.");
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
                    listitem(id,"Lie down in the supine position or lying on your stomach.");
                    listitem(id,"Raise your legs slowly upward and bring it to 90° angle.");
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
                    listitem(id,"Start by sitting at Padmasana or Lotus Pose.");
                    listitem(id,"Relax your body in Padmasana by taking deep and long breaths");
                    listitem(id,"Move your body slowly backward by placing your right forearm and elbow carefully on the floor. Do the same with your left arm.");
                    listitem(id,"Now by taking the support of your forearms and elbows, lower slowly your body while placing the crown of your head gently on the floor.");
                    listitem(id,"Try to arch the back as far as possible without straining. Make sure that you hold your feet with hands.");
                    listitem(id,"Close your eyes and completely relax your body. Gently take deep and slow breaths. Hold in this final pose at least for a couple of seconds.");
                    listitem(id,"Exhale gently and reverse these movements gently one by one as you release the posture.");
            break;
            case "Padma_Sarvangasana":
                    listitem(id,"Begin the practice lying on the back and come into Salamba Sarvangasana (Shoulderstand Pose), supporting your back with your palms, flexing the wrists.");
                    listitem(id,"From here, bend the right leg and bring your right foot towards the left hip, while ensuring that the sole of the foot is facing you.");
                    listitem(id,"Maintaining balance, slowly bend the left leg and place the left foot over the right thigh, near the right hip.");
                    listitem(id,"While folding the legs make sure the hips and back are still supported with the hands. Come into Padmasana (Lotus Pose) legs, and lengthen the spine lifting the hips and folded legs higher.");
                    listitem(id,"Supporting with the hands, stay here for a 3-4 breaths, initially. Practice Ujjayi Pranayama, where the breath passes through, activating the back of the throat.");
                    listitem(id,"While here ensure the chin is locked and the body is balancing on the shoulders, elbows and back of the head.");
                    listitem(id,"To release, gently let go of the Padmasana legs and exhale to stretch the legs up in 90 degrees. Take a few breaths here to relax, and repeat the practice, but crossing the right leg over left leg. Stay for about 3-4 breaths.");
                    listitem(id,"Release and relax, and come to rest completely in Savasana (Corpse Pose).");
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
            case "Utkatasana":
                listitem(id,"Stand in Tadasana (Mountain Pose) and stretch the arms straight over the head and join the palms.");
                listitem(id,"Exhale deeply, and bend the knees. Lower the trunk till the thighs are parallel to the floor.");
                listitem(id,"Don’t stoop forward, but keep the chest as far back as possible. Breathe normally.");
                listitem(id,"Stay in this pose for as long as you can. If you’re doing this pose for the first time, then don’t stay in this pose for more than 30 seconds as it can be quite strenuous.");
                listitem(id,"Inhale. Straighten the legs, lower the arms, return to Tadasana and relax.");
            break;
            case "Bakasana":
                listitem(id,"Wide stretch the fingers of your hands and place the palms on the floor (shoulder width apart) right in front of your feet. Point the fingers forwards and keep the elbows slightly bent.");
                listitem(id,"Lean forward a little in order to bring the knees close to the armpits as much as you can. Transfer your body weight to your arms completely while your toes are still on the floor.");
                listitem(id,"Gently press your knees against the arms and slowly lift your big toes off the floor. Raise your buttocks a little and balance the body solely on your arms.");
                listitem(id,"Lift your head, lengthen your neck. Look straight to focus your gaze on a fixed point. Once you have secured the balance move your feet closer so as to bring the inner edges of your feet together.");
                listitem(id,"Breath normally and hold the position for 5 to 15 breaths.");
                listitem(id,"To come out of the pose slowly lower your feet to the floor. Relax the body taking slow and deep breaths.");
            break;
            case "Kashypasana":
                listitem(id,"To begin, sit in the center of your mat, facing its long side. Come into Half Lotus with your left leg on top. Draw the outer edge of your foot deeply into your hip crease. Wrap your left arm behind your back, and take hold of your foot. ");
                listitem(id,"Next, place your right hand on the floor in line with your hip and about a foot from your pelvis. Externally rotate your arm, and draw your shoulder blade down your back. ");
                listitem(id,"Begin to lean into your right arm and partially straighten your bottom, right leg in the opposite direction. This may sound complicated, so take a moment to picture yourself doing the full pose. ");
                listitem(id,"Remember, you’ll essentially be in Side Plank—right now, you’re simply positioning other body parts for the final pose.");
                listitem(id,"Maintaining the external rotation and scapular engagement of your right arm, lean more of your weight into the right hand. With your right leg straight, press the outer edge of your right foot into the floor, and lift your hips. You may need to practice this step many times. ");
                listitem(id,"If you’re able to lift your hips and maintain the bind, take a few breaths and savor the posture. Open the left side of your chest toward the ceiling, draw your front ribs in, and lift your hips as high as possible. To release, let go of your foot, lower your hips to the floor, and gently release the Lotus leg.");
            break;
            case "Tiryak_Bhujangasana":
                listitem(id,"Lie down on your stomach. Legs straight with toes pointing backwards (feet can be together or apart depending on the flexibility).");
                listitem(id,"Place the palm on the floor on the sides of the shoulder, with fingers pointing forward. Position the arms so that the elbows point backwards and are close to the body.");
                listitem(id,"Inhale and straighten the arms to lift the chest off the floor, rise only to the point till the pubic bone is in contact with the floor. Press the pubis into the ground and try to arch your back further and look over your right shoulder.");
                listitem(id,"The arms may or may not be straight depending on the flexibility of the back.");
                listitem(id,"Hold the pose anywhere from 15 to 30 seconds, breathing easily. Come back to the floor with an exhalation. Repeat the same on the other side.");
            break;
            case "Trikonasana":
                listitem(id,"Move the legs 3-4 feet distance apart. Raise both the arms straight out to the sides, in line with the shoulders and parallel to the floor with the palms facing downwards.");
                listitem(id,"Move the right foot to the outside direction. Turn the left foot slightly to the inward direction. The knees must remain straight throughout the practice.");
                listitem(id,"Slowly begin to bend the trunk towards the right side. Make sure the body doesn’t go in the forward direction.");
                listitem(id,"Once the trunk is completely bent the hand must be close to the right ankle with the fingers slightly touching the floor. ");
                listitem(id,"Stretch the left arm vertically. Move the head in the upward direction and look straight.");
                listitem(id,"Hold the position for a minute or half or even lesser in the beginning. Gradually increasing the time as you begin to feel more comfortable.");
                listitem(id,"To return, lift the arms first and then slowly move the trunk back in the upright position. Relax the body.");
            break;
            case "Ardha_Chakrasana":
                listitem(id,"Stand straight like Tadasana (Mountain Pose).");
                listitem(id,"Now while inhaling raise your hand up straight and bend backward as shown in above image.");
                listitem(id,"You can hold your hips with your hands and bend backward without bending knees.");
                listitem(id,"Hold this position for few seconds and continue breathing slowly.");
                listitem(id,"Now while exhaling, come back to the starting position.");
                listitem(id,"Repeat this cycle for 3-5 times.")
            break;
            case "Veerbhadrasana":
                listitem(id,"Take a deep breath and step your legs 4-5 feet apart.");
                listitem(id,"Raise your arms upwards to join both the palms right over your head.");
                listitem(id,"Exhale and turn the right foot outwards 90 degree to the right.");
                listitem(id,"Slightly turn the left foot inwards 45-60 degree to the right.");
                listitem(id,"The right heel must be aligned with the arch of the left heel.");
                listitem(id,"Rotate the torso to the right keeping the arms straight.");
                listitem(id,"Exhale and bend the right knee until the right thigh becomes parallel to the floor.");
                listitem(id,"Keep the right shin perpendicular to the floor.");
                listitem(id,"This alignment will form a 90-degree angle between your right thigh and right shin.");
                listitem(id,"The bent knee must not extend beyond the ankle. It must be aligned right over the heel.");
                listitem(id,"Left leg must remain stretched out and tighten at the knee throughout the practice.");
                listitem(id,"Move your face in the upward direction and look at the joined palms. ");
                listitem(id,"Retain the final position from a few seconds to half a minute.Take long and deep breaths.");
                listitem(id,"To release the posture reverse the movements one by one in the same manner.");
            break;
            case "Garudasana":
                listitem(id,"Slightly bend your knees, lift your left leg balancing the body on the right leg. Place the left thigh over the right thigh.");
                listitem(id,"Wrap the shin of your left leg around the calf of the right leg. Hook the top of the left foot in the lower right calf. Balance the body on right leg.");
                listitem(id,"Raise the arms in front and parallel to the floor, palms facing upward direction. Next, cross your arms placing the right arm above the left arm.");
                listitem(id,"Bend the elbows making the forearms perpendicular to the floor. Wrap the left forearm around and under the right forearm. Rest your left hand’s fingers firmly on your right palm. Keep the spine erect.");
                listitem(id,"Focus your gaze at a fixed point at a distance of 4-5 feet away. This is the final position. Hold the pose for 15 to 20 seconds taking deep breaths.");
                listitem(id,"To return, gently release the arms first and then the legs to come back in starting position. Take 3 deep and long breaths, practice from the other side by interchanging the position of legs and arms.");
            break;
            case "Marjariasana":
                listitem(id,"Sit in Vajrasana, stand on the knees.");
                listitem(id,"Lean in the forward direction. Place the hands flat on the floor with palms down and fingers facing towards the forward direction.");
                listitem(id,"Keep the hands in a line with the knees. Keep the arms and thighs perpendicular to the floor.");
                listitem(id,"Inhale a deep breath and raise the head along with putting stress on the spine in the downward direction, so that the back can turn into a concave shape.");
                listitem(id,"Expand the abdomen as much as possible without forcing; Take deep breath. Hold breath for a minimum of 3 seconds. Exhale and lower the head while stretching the spine in the upward direction.");
                listitem(id,"Then contract the expanded abdomen and pull in the buttocks.");
                listitem(id,"Leave the head between the arms facing the thighs.");
                listitem(id,"Hold the breath for 3 seconds, stressing the arch of the spine and the contraction of the abdomen. Relax and practice again.");
            break;



            default:
                    listitem(id,"The procedure for this asana couldn't be found.");
            break;
                //Shalabhasana5
                //Tiryak Bhujangasana
                //Vrikshasana6
                //Trikonasana
                //Ardha_Chakrasana
                //Veerbhadrasana
                //Garudasana
                //Katichakrasana
                //Hastapadasana



                //*****Sitting Pose */
                //Badhakonasana
                //Paschimottanasana
                //poorvottanasana
                //Padmasana
                //shishuasana
                //Gomukhasana

                //******** Lying Down on Stomach */
                //Dhanurasana
            }
        }




















        //This function will use listitem function for appending the precautions
        function precautions()
        {
            var id="pre";
            switch(asana_name)
            {
                case "Shavasana":
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
                case "Halasana":
                    listitem(id,"Avoid practicing Halasana in case you suffer from any of this condition: Slipped disc, severe pain or injury in back or neck, hernia, sciatica, enlarged thyroid, spleen or liver, cervical problems, heart conditions or frequent headaches.");
                    listitem(id,"Halasana must not be practiced during pregnancy and while menstruation.");
                break;
                case "Vashishtasana":
                    listitem(id,"You should avoid this asana if you have chronic back pain.");
                    listitem(id,"You should avoid this asana if you have Heart ailments.");
                    listitem(id,"Avoid this asana in case of High Blood Pressure");
                    listitem(id,"Don't practise it if you have weak limbs.");
                break;
                case "Mayurasana":
                    listitem(id,"Do not practice Mayurasana if you already have a wrist, elbow or shoulder injury.");
                    listitem(id,"You should strictly avoid Mayurasana if you have high blood pressure; heart diseases; intestinal problems; a hernia; eye, nose and ear infections or brain tumor.");
                    listitem(id,"Pregnant and menstruating women should not practice Mayurasana.");
                    listitem(id,"If you are not feeling well while practicing Mayurasana, immediately come out of the pose.");
                    listitem(id,"With your fingers pointing towards your pelvis and your wrists in a vulnerable position, leaning the head toward the ground may cause harm to your bones");
                break;
                case "Anantasana":
                    listitem(id,"Avoid this pose if you have pain or injury to your neck, shoulders, or back.");
                    listitem(id,"Avoid this asana if you have sciatica pain, spondylitis issues or slip disc problems.");
                break;
                case "Malasana":
                    listitem(id,"Practice this pose only on an empty stomach");
                    listitem(id,"Be slow and careful while doing the asana as in almost all the yoga asanas.");
                    listitem(id,"This asana should be avoided by ladies if menstruating or should be performed under guidance of a yoga expert during those days.");
                break;
                case "Tiryak_Bhujangasana":
                    listitem(id,"Pregnant women should not do Tiryaka Bhujangasana as the weight of the body will put pressure on the fetus.");
                    listitem(id,"Avoid this asana in case of injuries in shoulders, arms and wrist");
                    listitem(id,"This asana should be avoid in conditions of back and spinal injuries.");
                break;
                case "Vrikshasana":
                    listitem(id,"Avoid doing this posture if you are suffering from migraine.");
                    listitem(id,"Avoid doing this posture if you are suffering from Insomnia.");
                    listitem(id,"Do not Practice this asana if you have low or high blood pressure problem");
                break;
                case "Trikonasana":
                    listitem(id,"Avoid doing this pose if you are suffering from migraine.");
                    listitem(id,"In case of diarrhea.");
                    listitem(id,"If you have low or high blood pressure problem, avoid this asana.");
                    listitem(id,"Avoid this asana if you have neck or back injuries.");
                break;    
                case "Ardha_Chakrasana":
                    listitem(id,"Ardha Chakrasana should not be done by those suffering from any neck, hip or spinal injury.");
                    listitem(id,"Be cautious while doing this pose if you have vertigo.");
                    listitem(id,"Those suffering from high blood pressure should avoid this pose.");
                    listitem(id,"Pregnant women should avoid all poses that puts any strain on the foetus.");
                break;
                case "Veerbhadrasana":
                    listitem(id,"People suffering from any kind of knee weakness or knee injury should not practice this asana.");
                    listitem(id,"If you suffer from any of this condition avoid practicing this asana: arthritis, spinal disorders, osteoarthritis, high blood pressure, respiratory diseases or any heart disease. ");
                break;
                case "Garudasana":
                    listitem(id,"Avoid practicing this pose if you’ve had a recent knee, ankle or elbow injury.");
                    listitem(id,"Eagle pose should not be attempted if you suffer from any of these conditions: Obesity, frequent headaches, high or low blood pressure or asthma.");
                    listitem(id,"Pregnant women must avoid practicing Eagle Pose as well.");
                break;
                case "Hastapadasana":
                    listitem(id,"People suffering from lower back injuries, Spondylitis, Cervical pain or any kind of back and spinal problems should not do this pose.");
                    listitem(id,"Avoid this asana if you had recently suffered from chronic injuries of hips, legs, shoulders or back.");
                break;
                case "Badhakonasana":
                    listitem(id,"Keep the spine erect while the practice.");
                    listitem(id,"Ensure you don’t use force on the knees while practicing this asana. Only push the thighs down.");
                    listitem(id,"If you experience discomfort in the knees place a blanket below the thighs for support.");
                    listitem(id,"If you suffer from any of this condition avoid practicing Butterfly Pose: Knee or groin injury, sciatica, sacral conditions.");
                break;
                case "Paschimottanasana":
                    listitem(id,"Do not practice this asana if have these diseases : Abdominal ulcer,Asthma, Diarrhea, Back injury,Pregnancy, Sciatica, Slipped Disc");
                break;
                case "Poorvottanasana":
                    listitem(id,"People with wrist injuries should avoid this asana.");
                    listitem(id,"Those suffering from any neck injury should either completely avoid doing this posture or use the support of a chair while practicing the pose.");
                break;
                case "Padmasana":
                    listitem(id,"People who are suffering from an ankle injury should not practice this asana. In case you have undergone a recent knee surgery please avoid this asana. If you have a sprain in the leg, then our advice is not to do this asana. Don’t perform this if you suffering from severe back pain.");
                break;
                case "Shishuasana":
                    listitem(id,"In case of serious back or knee injuries avoid this pose.");
                    listitem(id,"Pregnant women should avoid doing this pose.");
                    listitem(id,"Avoid this pose if you suffering from are or had recently suffered from diarrhea.");
                break;
                case "Gomukhasana":
                    listitem(id,"Avoid straining the body beyond the limits as it may cause back pain or spinal injury.");
                    listitem(id,"Consult a yoga trainer, if you are a beginner as this asana requires a lot of flexibility.");
                    listitem(id,"Do not overburden your body, if you are obese. Practice it according to the comfort level of the body.");
                    listitem(id,"People suffering from any of this condition should avoid practicing this asana: shoulder, back, neck or joint pain, migraine, or spinal disorders.");
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
                case "Shalabhasana":
                    listitem(id,"People suffering from any of this condition should avoid practicing Shalabhasana: abdominal tuberculosis, hernia, stomach ulcers or any other similar condition.");
                    listitem(id,"This asana is not suitable for people having high blood pressure or a weak heart.");
                break;
                case "Bhujangasana":
                    listitem(id,"Don’t keep your body stiff.");
                    listitem(id,"Do not force yourself too much practicing it.");
                    listitem(id,"Keep your buttocks loose as they tend to tighten up naturally during Cobra pose.");
                    listitem(id,"Do not raise your body too up making L-shape.");
                    listitem(id,"Consult a yoga specialist if you’re suffering from hernia, peptic ulcer, hyperthyroidism, or intestinal tuberculosis.");
                    listitem(id,"Don’t keep your arms straight. Keep your elbows outwards.");
                break;
                case "Salamba_Bhujangasana":
                    listitem(id,"Sphinx pose should be avoided if you are pregnant.");
                    listitem(id,"It's practice should be avoided if you have fractured ribs or wrists");
                    listitem(id,"It should not be practiced if you recently underwent abdominal surgery.");
                break;
                case "Viparita_Shalabhasana":
                    listitem(id,"Do not practice this yoga posture if you have had an abdominal surgery recently.");
                    listitem(id,"Avoid this asana if you are pregnant.");
                break;
                case "Makara_Adho_Mukha_Svanasana":
                    listitem(id,"Avoid this asana if you have shoulder injuries.");
                    listitem(id,"You should support torso on a bolster.");
                    listitem(id,"You should support forehead on a block.");
                break; 
                case "Matsyasana":
                    listitem(id,"People who are suffering from heart diseases, high blood pressure or low blood pressure should not perform Matsyasana.");
                    listitem(id,"Patients of migraine and insomnia should also abstain from practicing the Fish Pose.");
                    listitem(id,"Individuals having serious neck or lower-back injuries are recommended strongly not to perform this pose.");
                    listitem(id,"Men and women who just had an abdominal surgery should not perform Matsyasana. This also applies to people with a hernia.");
                    listitem(id,"If a person has issues like dizziness or cervical spine problems, then he or she should not perform this asana");
                    listitem(id,"People having migraines and peptic ulcers should also refrain from including Matsyasana in their yoga routine.");
                  break; 
                  case "Utkatasana":
                    listitem(id,"Avoid this asana if you are suffering from Arthritis.");
                    listitem(id,"Avoid this asana if you are suffering from headache.");
                    listitem(id,"Avoid this asana if you are suffering from Insomnia.");
                    listitem(id,"Avoid this asana if you are suffering from low blood pressure.");
                break;
                case "Sarvangasana":
                    listitem(id,"Avoid this asana if you have pregnancy.");
                    listitem(id,"If you are facing menstruation periods.");
                    listitem(id,"Avoid this asana if you have any of these problems: heart problem, glaucoma, slip disc, spondylosis, neck pain and acute thyroid.");
                break;
                case "Vishnuasana":
                    listitem(id,"Avoid this pose if you have pain or injury to your neck, shoulders, or back.");
                    listitem(id,"Avoid this asana if you have sciatica pain, spondylitis issues or slip disc problems.");
                break;
                case "Naukasana":
                    listitem(id,"Do not practice this yoga pose if you have low blood pressure, severe headache, migraine, or if you have suffered from some chronic diseases or spinal disorders in the recent past.");
                    listitem(id,"Asthma and heart patients are advised to avoid this pose.");
                    listitem(id,"Women should avoid doing Boat pose (Naukasana) during pregnancy and during the first two days of the menstrual cycle.");
                break;
                case "Natrajasana":
                    listitem(id,"Avoid this posture in case of spinal injuries.");
                break;
                case "Pavanmuktasana":
                    listitem(id,"Pregnant women should not perform this asana.");
                    listitem(id,"People with serious back conditions, such as sciatica and slipped disc should avoid this asana.");
                break; 
                case "Surya_Namaskar":
                    listitem(id,"Warm up your body before doing Surya Namaskar with the help of Sukshma Kriyaas.");
                    listitem(id,"Perform Surya Namaskar slowly at ease and try to hold every position for a while and feel it.");
                    listitem(id,"Focus on your breathing while performing every step. For example, breathe in while you are going back and breathe out while your spinal cord is bending forwards.");
                    listitem(id,"These days, various yoga centres treat it like an exercise and think that it is good to do it fast. Don't fall in this trap. You should try to connect with it while doing.");
                    listitem(id,"The synchronization between your breath and poses is most important.");
                  break;
                case "Chakrasana":
                    listitem(id,"Do not practice Chakrasana directly. You should practice easy postures such as setu asana and other backward back bending asanas as preparatory asanas before practicing Chakrasana.");
                    listitem(id,"It should not be practiced by people suffering from any illness.");
                    listitem(id,"Chakrasana is not suitable for weak people having some weakness in wrist or back.");
                    listitem(id,"Women should avoid practicing Chakrasana during pregnancy.");
                break;
                case "Patangasana":
                    listitem(id,"Keep the spine erect while the practice.");
                    listitem(id,"Ensure you don’t use force on the knees while practicing this asana. Only push the thighs down.");
                    listitem(id,"If you experience discomfort in the knees place a blanket below the thighs for support.");
                    listitem(id,"If you suffer from any of this condition avoid practicing Butterfly Pose: Knee or groin injury, sciatica, sacral conditions.");
                break;

                //...............starting of health problems..................
              
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
                case "Veerasana":
                    listitem(id,"People suffering from any kind of knee weakness or knee injury should not practice this asana.");
                    listitem(id,"If you suffer from any of this condition avoid practicing this asana: arthritis, spinal disorders, osteoarthritis, high blood pressure, respiratory diseases or any heart disease. ");
                break;
                case "Ashwa_Sanchalanasana":
                    listitem(id,"Be careful with the alignment of the knee in the front leg, it should be in line with the ankle. Don’t over practice as that could strain the muscles.");
                    listitem(id,"People with any neck problem should look straight instead of upward direction.");
                    listitem(id,"People suffering from any kind of knee and ankle problem should avoid practicing this asana.");
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
                case "Padma_Sarvangasana":
                    listitem(id,"This Asana should not be practiced with a hyperactive thyroid.");
                    listitem(id,"Avoid practicing this asana in case of high blood pressure.");
                    listitem(id,"If you have any doubts about your condition, consult a physician before practicing Padma Sarvangasana or The Lotus in Shoulder Stand Pose. And always practice asana under the supervision of a trained yoga expert as it helps to keep away any injuries.");
                    listitem(id,"You should not practice The Lotus in Shoulder Stand Pose if you had a heavy meal.");
                break;
                case "Bakasana":
                    listitem(id,"This is a pose to avoid if you have any wrist or shoulder injury or condition such as carpal tunnel syndrome.");
                    listitem(id,"It is not recommended if you are pregnant.");
                    listitem(id,"Put a blanket in front of you so you won't be afraid of hitting your head if you fall.");
                break;
                case "Kashypasana":
                    listitem(id,"Avoid this asana if having injuries to wrists, elbows, or shoulder joints.");
                    listitem(id,"Avoid this asana in case of high blood pressure");
                break;
                case "Marjariasana":
                    listitem(id,"One is advised to be careful while expanding and contracting the abdomen.");
                    listitem(id,"Do not stretch the body beyond its limits as it may cause pain and strain muscles.");
                    listitem(id,"While performing this asana during pregnancy one should stretch the abdomen only mildly.");
                    listitem(id,"People having any kind of head or knee injury should avoid practicing this asana.");
                break;
                default:
                    listitem(id,"The precaution for this asana couldn't be found.");
                break;
                //listitem(id,"");
            }
        }























        function benefits()
        {
            var id="benefit";
            switch(asana_name)
            {
                case "Shavasana":
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
                case "Halasana":
                    listitem(id,"Modulates the functioning of all internal organs therefore keeps them healthy.");
                    listitem(id,"Aids digestions, alleviate constipation and dyspepsia.");
                    listitem(id,"Rejuvenate adrenal glands and spleen.");
                    listitem(id,"Invigorate immune system.");
                    listitem(id,"Beneficial for the organs of the female reproductive system.");
                    listitem(id,"Regulates the production of insulin thus prevents diabetes.");
                    listitem(id,"Improves the flexibility of shoulders, elbows and wrists.");
                break;
                case "Vashishtasana":
                    listitem(id,"Strengthens the arms, belly, and legs");
                    listitem(id,"Stretches and strengthens the wrists");
                    listitem(id,"Stretches the backs of the legs (in the full version described below)");
                    listitem(id,"Improves sense of balance");
                break;
                case "Mayurasana":
                    listitem(id,"Peacock Pose removes toxins and detoxifies your body.");
                    listitem(id,"Improves the function of digestive system and makes abdomen stronger.");
                    listitem(id,"Peacock Pose is beneficial in piles and diabetes.");
                    listitem(id,"Strengthens and tones your reproductive system.");
                    listitem(id,"Mayurasana Improves sexual activity.");
                    listitem(id,"Makes your elbows, wrist, spine, and shoulders stronger.");
                    listitem(id,"Mayurasana improves your posture.");
                    listitem(id,"Reduces anxiety and stress and give calmness to the mind.");
                    listitem(id,"Increases your focusing power of the mind.");
                break;
                case "Anantasana":
                    listitem(id,"Infinite Yoga Pose stretches & strengthens your hamstrings, back of your leg part and sides of your torso.");
                    listitem(id,"It makes your leg muscles and spine more flexible.");
                    listitem(id,"Anantasana tones your abdominal muscles by this your digestion is improved.");
                    listitem(id,"Anantasana helps to develop your pelvic region.");
                    listitem(id,"It helps to reduce your thighs and hips weight.");
                    listitem(id,"By this Asana, there is a good circulation in your legs.");
                    listitem(id,"Beneficial in sciatica, hypertension, colitis, and arthritis.");
                    listitem(id,"The infinite pose also helps in to cure the problems related to the urinary bladder, ovaries, prostate, and uterus.");
                break;
                case "Malasana":
                    listitem(id,"Helps in losing extra fat in your thighs and belly");
                    listitem(id,"Tones the muscles of your legs, shoulders, back, and your neck.");
                    listitem(id,"It also helps in curing infertility");
                    listitem(id,"Improves balance, focus and concentration");
                    listitem(id,"Helps in relieving the stiffness in your shoulders");
                    listitem(id,"Increases blood flow in the pelvis");
                break;
                case "Tiryak_Bhujangasana":
                    listitem(id,"Tiryaka Bhujangasana makes the spine flexible and strong.");
                    listitem(id,"It can correct many postural defects of the upper spine and is good for cervical spondylitis.");
                    listitem(id,"It expands the thorax and improves lung capacity.");
                    listitem(id,"It tones the muscles of the abdomen and improves digestion.");
                    listitem(id,"It is good for liver, kidneys, stomach and pancreas.");
                    listitem(id,"Tiryaka Bhujangasana strengthens the arms and shoulders.");
                    listitem(id,"Muscles of the upper back are made flexible and strong.");
                break;
                case "Vrikshasana":
                    listitem(id,"This pose leaves you in a state of rejuvenation. It stretches the legs, back and arms, and invigorates you.");
                    listitem(id,"It brings balance and equilibrium to your mind.");
                    listitem(id,"It helps improve concentration.");
                    listitem(id,"This posture has been found to relieve some cases of sciatica.");
                    listitem(id,"It makes the legs strong, improves balance, and opens the hips.");
                break;
                case "Trikonasana":
                    listitem(id,"Strengthens the legs, knees, ankles, arms and chest.");
                    listitem(id,"Stretches and opens the hips, groins, hamstrings, calves, shoulders, chest and spine.");
                    listitem(id,"Increases mental and physical equilibrium.");
                    listitem(id,"Helps improve digestion.");
                    listitem(id,"Reduces anxiety, stress, back pain and sciatica");
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
                case "Veerbhadrasana":
                    listitem(id,"Strengthens and tones the arms, legs and lower back.");
                    listitem(id,"Improves balance in the body, helps increase stamina.");
                    listitem(id,"Beneficial for those with sedentary or deskbound jobs.");
                    listitem(id,"Extremely beneficial in case of frozen shoulders.");
                    listitem(id,"Releases stress in the shoulders very effectively in a short span of time.");
                    listitem(id,"Brings auspiciousness, courage, grace and peace.");
                break;  
                case "Garudasana":
                    listitem(id,"Stretches the hips, thighs, shoulders and upper back.");
                    listitem(id,"Improves balance.");
                    listitem(id,"Strengthens the calves.");
                    listitem(id,"Helps alleviate sciatica and rheumatism.");
                    listitem(id,"Loosens the legs and hips, making them more flexible.");
                    listitem(id,"Helps to reduce Asthma, Low backache and Sciatica");
                break; 
               
                case "Hastapadasana":
                    listitem(id,"Stretches all the muscles of the back of the body.");  
                    listitem(id,"Invigorates the nervous system by increasing the blood supply.");
                    listitem(id,"Makes the spine supple.");
                    listitem(id,"Tones the abdominal organs.");
                    listitem(id,"It is good for hair loss.");
                    listitem(id,"It relieves menstrual problems in women.");
                break;
                case "Badhakonasana":
                    listitem(id,"Works as a preparatory pose for meditative asanas such as Padmasana (Lotus Pose).");
                    listitem(id,"Practicing this asana gives a good stretch to the groin, inner thighs and knees.");
                    listitem(id,"Enhances bowel and intestine movements.");
                    listitem(id,"Useful for pregnant women for a natural and healthy delivery of the child.");
                    listitem(id,"Regulates irregular menstruation and helpful in getting relief from menstrual discomfort");
                    listitem(id,"Beneficial for people who spend long hours walking and standing by providing relief in lower limbs.");
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
                case "Poorvottanasana":
                    listitem(id,"Strengthens the wrists, arms, shoulders, back, and spine.");  
                    listitem(id,"Stretches the legs and hips.");
                    listitem(id,"Improves the respiratory function.");
                    listitem(id,"Stretches the intestines and abdominal organs.");
                    listitem(id,"Stimulates the thyroid gland");
                break;
                case "Padmasana":
                    listitem(id,"Padmasana is the highly preferred asanas by yoga practitioner in the beginning stage for increasing the focus of mind and concentration. It helps in improving the concentration power and it will calm the brain also.");
                    listitem(id,"This Asana helps to preserve vital fluids in the body and prevents abdominal diseases and female disorders connected with the reproductive organs.");
                    listitem(id,"Doing this Asana gives your mind peace, solitude, and longevity to the practitioner. It increases the hungry and helps to relax the body.");
                    listitem(id,"It can also help in the stretches the ankle and knees. This Asana is the base for all asanas and it strengthens the hip and knee joints of the female and can get painless peaceful mind.");
                    listitem(id," You can reduce the unwanted fat of the hips and the thighs. This is the simplest and easiest asana which can practice by all the age group of men and women they can get benefits of Yoga Asana.");
                break;
                case "Shishuasana":
                    listitem(id,"Deeply relaxing for the back.");
                    listitem(id,"Relieves constipation.");
                    listitem(id,"Calms down the nervous system.");
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
                case "Dhanurasana":
                    listitem(id,"Dhanurasana strengthens the back and abdominal muscles.");
                    listitem(id,"It stimulates the reproductive organs.");
                    listitem(id,"It adds greater flexibility to back muscles.");
                    listitem(id,"It is good stress and fatigue buster.");
                    listitem(id,"It relieves menstrual discomfort and constipation as it massages liver.");
                    listitem(id,"It tones the leg and arm muscles.");
                    listitem(id,"It is helpful for people suffering from kidney disorders.");
                break;
                case "Shalabhasana":
                    listitem(id,"Strengthens the lower back and tones the organs of pelvic region hence leads to well functioning of stomach, liver and bowels.");
                    listitem(id,"Beneficial for people suffering from back pain, slipped disc and sciatica but only if the condition is not severe.");
                    listitem(id,"Enhances the functioning of abdominal organs particularly of the lower abdomen.");
                    listitem(id,"Practicing this asana tightens and tones the muscles of the buttocks and arouses appetite.");
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
                  case "Salamba_Bhujangasana":
                    listitem(id,"Strengthens the spine.");
                    listitem(id,"Stretches chest and lungs, shoulders, and abdomen.");
                    listitem(id,"Firms the buttocks.");
                    listitem(id,"Stimulates abdominal organs.");
                    listitem(id,"Helps relieve stress.");
                break;
                case "Viparita_Shalabhasana":
                    listitem(id,"Stretches and strengthens the muscles of the chest, shoulders, arms, legs, abdomen and the lower back.");
                    listitem(id,"Tones the abdomen and lower back.");
                    listitem(id,"Massages the spine and keeps the back supple.");
                    listitem(id,"Helps stretch the chest.");
                    listitem(id,"Improves blood circulation.");
                    listitem(id,"Also works at the mind level – when you take off, you can't but stay in the present moment. Even if you want to, you can't think about any problem!");
                    listitem(id,"Can be a good workout for the abs and stomach.");
                break;
                case "Makara_Adho_Mukha_Svanasana":
                    listitem(id,"Effectively relives the body of headache, fatigue and back-ache.");
                    listitem(id,"Strengthens the arms and legs.");
                    listitem(id,"Tones the abdominal muscles.");
                    listitem(id,"Improves digestion.");
                    listitem(id,"Relieves menstrual discomfort.");
                break;
                case "Matsyasana":
                    listitem(id,"Matsyasana helps to relieve respiratory problems by promoting the right method of breathing. The asana also expands bronchial tubes to promote easier breathing. This makes Matsyasana especially beneficial for asthma patients.");
                    listitem(id,"It helps to stretch the upper body which allows for unrestricted airflow, thereby providing additional oxygen into one’s lungs.");
                    listitem(id,"It improves and stabilizes functioning of the pineal, parathyroid, adrenal, and pituitary glands, thus effectively regulating hormonal functions of the body.");
                    listitem(id,"It stretches the neck and the spine thus removing strain resulting from neck and back pain");
                    listitem(id,"The asana helps to instigate nutrient absorption.");
                    listitem(id,"When practiced regularly, this asana can bring increased improvement to the skin conditions as well as enhance the throat and facial muscles.");
                    listitem(id,"By stretching the neck and chest areas, Matsyasana helps to release tension in neck and shoulders.");
                    listitem(id,"The asana can improve flexibility, posture, and digestion, thereby removing problems like constipation.");
                  break;
                  case "Utkatasana":
                    listitem(id,"Chair Pose stretches spine, hips and your chest muscles.");
                    listitem(id,"Chair Yoga Pose strengthens the immune system and gives relieves back pain and joint pain.");
                    listitem(id,"This asana gives the stomach organs a decent back rub Furthermore. Invigorates the stomach and the heart.");
                    listitem(id,"Daily practice grants a feeling of equalization in the body.");
                    listitem(id,"Utkatasana strengthened your torso and lower back.");
                    listitem(id,"This Yoga Pose tones the legs, muscles in the knee, the ankles, and the thighs.");
                    listitem(id,"Chair Pose reduces weight, especially from the buttocks.");
                break;
                case "Sarvangasana":
                    listitem(id,"The shoulderstand yoga pose is good for the healthy functioning of pituitary, pineal, kidney, liver, spleen and testes. Thus, it regulates the functions of all the glands of the body.");
                    listitem(id,"The asana is good in case of circulatory system, respiratory system and digestive system.");
                    listitem(id,"It enhances the supply of blood to the head region and good for managing headache and migraine.");
                    listitem(id,"It has cooling effect to the nerves, thus beneficial for high blood pressure patient.");
                    listitem(id,"It is good for insomnia patient as it facilitates blood supply to this region.");
                    listitem(id,"It seems to be panacea for constipation patient. Person suffering from constipation should practice it regularly.");
                    listitem(id,"It stimulates the intestinal and stomach glands thus good for ulcer in these region.");
                    listitem(id,"It enhances supply of blood in the head region and prevents hair fall.");
                    listitem(id,"It is good for eye vision.");
                    listitem(id,"It helps to prevent wrinkles, pimples and delay aging.");
                break;
                case "Vishnuasana":
                    listitem(id,"Infinite Yoga Pose stretches & strengthens your hamstrings, back of your leg part and sides of your torso.");
                    listitem(id,"It makes your leg muscles and spine more flexible.");
                    listitem(id,"Anantasana tones your abdominal muscles by this your digestion is improved.");
                    listitem(id,"Anantasana helps to develop your pelvic region.");
                    listitem(id,"It helps to reduce your thighs and hips weight.");
                    listitem(id,"By this Asana, there is a good circulation in your legs.");
                    listitem(id,"Beneficial in sciatica, hypertension, colitis, and arthritis.");
                    listitem(id,"The infinite pose also helps in to cure the problems related to the urinary bladder, ovaries, prostate, and uterus.");
                break;
                case "Naukasana":
                    listitem(id,"Strengthens the back and abdominal muscles.");
                    listitem(id,"Tones the leg and arm muscles.");
                    listitem(id,"Useful for people with hernia.");
                break;
                case "Natrajasana":
                    listitem(id,"Stretches the spine and quadriceps.");
                    listitem(id,"Brings deep relaxation to the body and mind.");
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
                  case "Chakrasana":
                    listitem(id,"Increases the flexibility of the body.");
                    listitem(id,"Strengthens the bones and muscles of the body and is mainly beneficial in strengthening the legs.");
                    listitem(id,"strengthens the respiratory system as by doing it, the chest enhances and the lungs get oxygen to its fullest.");
                    listitem(id,"Relives all the stress and tension as it strengthens the nervous system and refreshes the brain.");
                    listitem(id,"Helpful in reducing the fat of the abdomen and to get rid of the bloated belly.");
                    listitem(id,"Beneficial for the digestive system, gastric problems and for all the disorders of the female reproductive system.");
                    listitem(id,"Ensures better functioning of the heart, liver, spleen, and kidneys. Helpful in curing hernia.");
                  break;
                  case "Patangasana":
                    listitem(id,"Works as a preparatory pose for meditative asanas such as Padmasana (Lotus Pose).");
                    listitem(id,"Practicing this asana gives a good stretch to the groin, inner thighs and knees.");
                    listitem(id,"Enhances bowel and intestine movements.");
                    listitem(id,"Useful for pregnant women for a natural and healthy delivery of the child.");
                    listitem(id,"Regulates irregular menstruation and helpful in getting relief from menstrual discomfort");
                    listitem(id,"Beneficial for people who spend long hours walking and standing by providing relief in lower limbs.");
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
                case "Kati_Chakrasana":
                    listitem(id,"This yoga pose is good to give suitable workout in the lower abdomen area thereby helps in shedding fat of this region.");
                    listitem(id,"It is good to improve the flexibility of the spine and effective for spine injuries and disorders. It helps to contract and expand the muscles of neck, back and abdominal wall and give a smooth massage to the entire vertebral column.");
                    listitem(id,"It overcomes the problems related with indigestion and constipation. It smooths proper bowel movement.");
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
                case "Padma_Sarvangasana":
                    listitem(id,"Padma Sarvangasana helps in Increasing the flow of blood to the brain and thus helps in flushing out toxins stored in the body which also helps in getting a glow on the face.");
                    listitem(id,"The Lotus in Shoulder Stand Pose also helps in draining excess blood and lymph collected in the legs.");
                    listitem(id,"It helps in maintaining the health of the uterus and ovaries and thus helps in improving the health of the female reproductive system.");
                    listitem(id,"It is a very beneficial pose for the patient suffering from thyroid disorders.");
                    listitem(id,"Padma Sarvangasana strengthens the muscles of the neck, back, and shoulders.");
                    listitem(id,"It helps relieve you of all the back problems.");
                    listitem(id,"Padma Sarvangasana or The Lotus in Shoulder Stand Pose refreshes and rejuvenates you and also relieves you of stress and mild depression.");
                    listitem(id,"The Lotus in Shoulder Stand Pose makes your body flexible and tones the core muscle of the body.");
                    listitem(id,"It also helps in reducing respiratory illnesses with regular practice.");
                break;
                case "Bakasana":
                    listitem(id,"Regular practice of this pose will increase mental and physical strength.");
                    listitem(id,"Helps in to make your body more flexible.");
                    listitem(id,"It increases endurance capacity.");
                    listitem(id,"Practicing this posture on a daily routine helps you in strengthening your forearms, wrists, and shoulders.");
                    listitem(id,"It provides a decent stretch to your higher back and even strengthens your abdominal muscles.");
                break;
                case "Kashypasana":
                    listitem(id,"Deep muscular massage to the abdominal organs.");
                    listitem(id,"Tones the digestive organs.");
                    listitem(id,"Increases appetite.");
                    listitem(id,"Sense of balance and concentration developed.");
                    listitem(id,"Disorders of the large intestine are alleviated.");
                    listitem(id,"Manipura chakra activated.");
                    listitem(id,"Relieves pain and stiffness in the sacral region.");
                    listitem(id,"Strengthens hands.");
                break;
                case "Marjariasana":
                    listitem(id,"Improves the posture of the body, strengthens the muscles and joints.");
                    listitem(id,"Gently massages the abdominal region and increase the flexibility of spine, shoulder & neck.");
                    listitem(id,"Improves the flow of blood in the body hence better circulation.");
                break;
                default:
                    listitem(id,"The benefits of this asana couldn't be found.");
                break;
                //listitem(id,"");
            }
        }





















        //This function will use listitem function for appending the dos
        function dos()
        {
            var id="do";
            switch(asana_name)
            {
                case "Shavasana":
                    listitem(id,"Modify Shavasana if you have any lower back issues by placing a pillow");
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
                case "Halasana":
                    listitem(id,"Keep the legs straight in knees with toes vertical on the ground over your head.");
                    listitem(id,"Raise the entire back & buttocks off the ground");
                    listitem(id,"Legs are in one straight line");
                    listitem(id,"As far as possible, the back remains straight & vertical.");
                    listitem(id,"Arms straight with palms on the ground.");
                break;
                case "Vashishtasana":
                    listitem(id,"Talk to your doctor or physical therapist about whether it is appropriate if you have any other injuries or conditions.");
                    listitem(id,"Stop if you feel pain at any time.");
                break;
                case "Mayurasana":
                    listitem(id,"Keep your elbows narrowed in when you may feel like a seesaw or teeter-totter.");
                    listitem(id,"Though most of the bodyweight is carried by the upper body, you should avoid leaning all the way forward");
                    listitem(id,"Release the pose gracefully and safely by lowering one foot at a time.");
                break;
                case "Anantasana":
                    listitem(id,"If you feel any sharp pain during this pose, gently release it.");
                    listitem(id,"You have to practice this Pose only under the supervision of an expert trainer.");
                break;
                case "Malasana":
                    listitem(id,"Do a little warm-up before practicing it.");
                break;
                case "Tiryak_Bhujangasana":
                    listitem(id,"Do avoid this asana in case of headache.");
                    listitem(id,"Stop practicing this asana if you have hernia problem.");
                break;
                case "Vrikshasana":
                    listitem(id,"Stand straight, keep the body upright.");
                    listitem(id,"Pull the shoulders back, open the chest.");
                    listitem(id,"Arms raised over head, palms joined in Namaskar position, upper arms touching the ears.");
                    listitem(id,"Raise the heels and stand on the toes.");
                    listitem(id,"Stretch the entire body in upward direction while maintaining the balance.");
                break;
                case "Trikonasana":
                    listitem(id,"Left leg placed to the left of the body at distance of about 4 to 5 feet (Distance depends on individual height and ability to stretch the body).");
                    listitem(id,"Left leg bent in knee so that the thigh and calf make 90 degree angle with each other the thigh will be parallel with the ground.");
                    listitem(id,"Left foot turned to the left side making 90 deg angles to the right foot.");
                    listitem(id,"Right leg stretched to the right, the right foot pointing forward.");
                    listitem(id,"Hips / Torso facing front.");
                    listitem(id,"Try to align head with the right arm, with the right ear touching the right upper arm.");
                    listitem(id,"Pull the shoulders behind, open the chest.");  
                    listitem(id,"Keep both the heels on the ground.");
                break;
                case "Ardha_Chakrasana":
                    listitem(id,"Perform Tadasana by raising your hands while you’re inhaling. Attempt Tadasana for 2 to 3 times.");
                    listitem(id,"After performing Mountain Pose, just place your both hands on the back side of your hips.");
                    listitem(id,"Breathe in and try to slowly backbend your upper body (bend as much as you can). Remember one most important thing is that, don’t bend your knees.");
                break;
                case "Veerbhadrasana":
                    listitem(id,"Left leg placed straight in front of the body.");
                    listitem(id,"Right leg stretched behind, the right foot at 45 deg angle to the left foot. ");
                    listitem(id,"Bend the left leg to a 90 degree angle so the thigh is parallel with the floor.");
                    listitem(id,"Raise the arms straight over head with palms joined in Namaskar position.");
                    listitem(id,"Take the arms backwards as far as possible ");
                    listitem(id,"Pull the shoulders back, open the chest.");
                    listitem(id,"Keep both the heels on the ground. ");
                break;
                case "Garudasana":
                    listitem(id,"Stop doing this asana if you have wrist problems");
                    listitem(id,"Bend your upper body to a low limit in order to obtain balance.");
                break;
              
                case "Hastapadasana":
                    listitem(id,"Touch the land properly with hands, keep the legs straight.");
                    listitem(id,"Bend forward in the waist.");
                    listitem(id,"Try to touch the forehead to the knees and elbows to the ground.");
                break;
                case "Badhakonasana":
                    listitem(id,"If you are suffering from groin or knee injury, make sure you keep a blanket under the outer thighs for support. Do not perform this pose without blanket support.");
                    listitem(id,"Sciatica patients should either completely avoid the pose or sit on a cushion to raise the hips.");
                    listitem(id,"If you have any lower-back disorders, do the posture only while keeping the spine erect.");
                break;
                case "Paschimottanasana":
                    listitem(id,"As per your practice, you may increase the number of rounds as well as duration of maintaining the pose.");
                    listitem(id,"While bending forward, do exhaling.");
                    listitem(id,"Toes should remain together pointing forward.");
                    listitem(id,"Try to touch the forehead to the knees and elbows to the ground. ");
                break;
                case "Poorvottanasana":
                    listitem(id,"Keep your hands shoulder width apart and your feet hip width apart.");  
                    listitem(id,"Keep your elbow creases facing one another.");
                    listitem(id,"Stack your shoulders over your wrists.");
                    listitem(id,"Keep your hips slightly lower than your shoulders.");
                    listitem(id,"Hug your belly into the spine to keep the spine supported so the spine doesn't 'sag' toward the floor.");
                    listitem(id,"Stretch back through your heels so your legs stay super active! The more active the legs are, the less weight you will feel through the upper body.");
                    listitem(id,"Lift the chest slightly so the shoulders aren't rounding at all.");
                    listitem(id,"Keep the head in line with the spine - You should be able to place a pole across your back body and it should create a diagonal line.");
                break;
                case "Padmasana":
                    listitem(id,"It’s good to do this pose in the morning with empty stomach.");
                    listitem(id,"Practise this yoga daily, will yield the better results.");
                    listitem(id,"Keep the head straight and spine erect.");
                    listitem(id,"Make sure that both legs are crossed and foot placed on the opposite thighs.");
                break;
                case "Shishuasana":
                    listitem(id,"Join both the toes and try to join both knees together.");
                    listitem(id,"Stretch your hands in the front as much as your body allows.");
                    listitem(id,"Be in a relaxing position while practicing this asana.");
                    listitem(id,"You can close your eyes to be in relaxing pose.");
                break;
                case "Gomukhasana":
                    listitem(id,"It is best if the Gomukhasana is performed first thing in the morning. Its benefits are numerous. Your stomach and bowels must be empty when you practice this asana. Make sure you have your meals at least 10 to 12 hours before your practice.");
                break;
                case "Dhanurasana":
                    listitem(id,"Hold the ankles with hands and pull them towards head at the same time try to bend the head backwards looking to the sky.");
                    listitem(id,"Also pull the arms with legs pushing backwards.");
                    listitem(id,"Try to balance on the abdomen.");
                    listitem(id,"Keep the knees, thighs off the ground; one can keep about 1 foot distance between knees.");
                    listitem(id,"Open the chest and pull the shoulders back. ");
                break;
                case "Shalabhasana":
                    listitem(id,"Let the breathing and heartbeat return to normal.");
                    listitem(id,"Gently close the eyes, relax the whole body, inhale deeply. This is the starting position.");
                break;
                case "Bhujangasana":
                    listitem(id,"Bend arms, fingers together and pointing forward with palms on ground.");
                    listitem(id,"Toes, heels, knees together as far as possible, toes pointing backwards");
                    listitem(id,"Looking at the sky.");
                    listitem(id,"Elbows and hands close to the body.");
                    listitem(id,"Open the chest, pull the shoulders backwards and downwards.");
                    listitem(id,"You can lift the palms off the ground, if you can maintain the steady position ");
                break;
                case "Salamba_Bhujangasana":
                    listitem(id,"Try and keep the knees and ankles together, toes pointed.");
                    listitem(id,"Gaze towards the ceiling.");
                    listitem(id,"Open the chest; pull the shoulders backwards and downwards.");
                    listitem(id,"Relax the lower-back and raise the hips if you experience pain in lower-back.");
                break;
                case "Viparita_Shalabhasana":
                    listitem(id,"Try to stretch your body and push your limits.");
                    listitem(id,"Raise hands and legs equally.");
                    listitem(id,"Increase the duration of this asana gradually."); 
                    listitem(id,"Hands should be straight.");
                break;
                case "Makara_Adho_Mukha_Svanasana":
                    listitem(id,"Perform this pose only with the supervision of an experienced teacher.");
                    listitem(id,"Gaze forward.");
                    listitem(id,"Keep your body straight like a straight plank.");
                    listitem(id,"Make 90 deg angle at the elbow joint during the asana.");
                break; 
                case "Matsyasana":
                    listitem(id,"The pose should be performed only under the close observation of an experienced yoga teacher.So as you have acquainted yourself with the various intricate aspects of Matsyasana yoga poses, go ahead and practice this asana for physical and emotional well being.");
                    listitem(id,"Lift the head with the support of hands, elbows.");
                    listitem(id,"Try to rest the crown of the head on the ground.");
                    listitem(id,"While taking, releasing & maintaining the position, support the head and neck very carefully.");
                    listitem(id,"Try to keep soft cushion under the head.");
                break;
                case "Utkatasana":
                    listitem(id,"You can increase the strength of your thighs by squeezing a block or thick book between them during the pose.");
                    listitem(id,"Keep the hands shoulder width apart");
                    listitem(id,"If it is too difficult to hold the posture, make it dynamic (inhale hands up, exhale bend knees, inhale straighten, exhale hands down and repeat 20 times)");
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
                case "Vishnuasana":
                    listitem(id,"If you feel any sharp pain during this pose, gently release it.");
                    listitem(id,"You have to practice this Pose only under the supervision of an expert trainer.");
                break;
                case "Naukasana":
                    listitem(id,"Keep the legs straight in knees and inclined at 45 deg angle with the floor.");
                    listitem(id,"As far as possible the back remains straight.");
                    listitem(id,"Arms straight with fingers holding the toes.");
                    listitem(id,"Eye sight fixed on the toes.");
                    listitem(id,"You may start from sitting position if it is difficult to achieve the position from supine position.");
                    listitem(id,"Try to balance on the buttocks.");
                break;
                case "Natrajasana":
                    listitem(id,"Performing this yoga, balancing is utmost important.");
                    listitem(id,"It is better if one practice it before a yoga expert.");
                break;
                case "Pavanmuktasana":
                    listitem(id,"Keep the legs folded in knees and pressed on the abdomen using the folded arms. ");
                    listitem(id,"Try to touch the chin to the knees.");
                    listitem(id,"Try to keep the legs together.");
                    listitem(id,"Point the toes.");
                break;
                case "Surya_Namaskar":
                    listitem(id,"Find a point of focus.");
                    listitem(id,"To exit Anantasana, EXHALE slowly, release the right hand holding the right big toe, bend the right knee of the lifted leg towards your torso, and then as you straighten that top leg, slowly lower the lifted right foot to rest on the top of the other (left) foot, or right toes can touch the floor as that top right leg rests just in front of the bottom left leg for better balance. ");
                break;
                case "Chakrasana":
                    listitem(id,"Keep the breathing slow and rhythmic. Keep the shoulder blades and neck region relaxed and comfortable. Keep the facial muscles soft and relaxed. Keep the arms and knees straight. Keep some distance between the feet for better support and balance while in the pose. Respect and find acceptance with the body, by not pushing yourself into the pose.");
                break;
                case "Patangasana":
                    listitem(id,"If you are suffering from groin or knee injury, make sure you keep a blanket under the outer thighs for support. Do not perform this pose without blanket support. Also, sciatica patients should either completely avoid the pose or sit on a cushion to raise the hips. If you have any lower-back disorders, do the posture only while keeping the spine erect. Avoid rounding up the spine by bending forward.");
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
                case "Padma_Sarvangasana":
                    listitem(id,"Do breathe normally in the final pose, holding it for a few seconds initially");
                    listitem(id,"Then increase the duration upto 2-3 minutes to reap the maximum benefits from the pose.");
                break;
                case "Bakasana":
                    listitem(id,"Think less “hopping into the posture” and more “tilting into your hands.”");
                    listitem(id,"Engage and activate your inner thighs as you lean into the posture.");
                    listitem(id,"Try to hug yourself in a weird and wonderful way.");
                break;
                case "Kashypasana":
                    listitem(id,"If you have time, sit cross-legged for a few minutes of meditation before Savasana");
                break;
                case "Marjariasana":
                    listitem(id,"Slow and deep breathing improves the pose.");
                    listitem(id,"Try to make maximum move in the spine.");
                break;
                default:
                    listitem(id,"The do's of this asana couldn't be found.");
                break;
            }
                //listitem(id,"");
        }




















        //This function will use listitem function for appending the donts
        function donts()
        {
            var id="dont";
            switch(asana_name)
            {
                case "Shavasana":
                    listitem(id,"Don’t strain, this pose is about relaxation. Doing so will add stress to your back and other parts of your body.");
                    listitem(id,"Don’t skip Shavasana! It’s usually the last pose of your yoga routine. It allows your body to cool down after your workout.");
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
                case "Halasana":
                    listitem(id,"Do not bend the legs in knees.");
                    listitem(id,"Do not move the neck or overstrain it in chin lock position.");
                break;
                case "Vashishtasana":
                    listitem(id,"You should avoid side plank if you have an injury to your shoulder, arm, elbow, or ankle.");
                break;
                case "Mayurasana":
                    listitem(id,"Don’t lift your legs dramatically. Instead, lift one foot at a time.");
                    listitem(id,"Don’t start your sequence with this pose.");  
                break;
                case "Anantasana":
                    listitem(id,"Don't do Step 3 where your prop your head up with your hand, if you're really tipping a lot.");
                    listitem(id,"Don't let the body fall forward or backwards.");
                break;
                case "Malasana":
                    listitem(id,"Do not put the pressure on your heel during practicing it");
                    listitem(id,"If you have a lower back injury then do not practice Garland pose.");
                    listitem(id,"If you’ve injury or pain in your knees or hips, then don’t practice Garland Pose");
                break;
                case "Tiryak_Bhujangasana":
                    listitem(id,"Do not do this asana if you have peptic ulcer.");
                    listitem(id,"Do not do this asana if you are suffering from intestinal tuberclausis.");
                    listitem(id,"Do not practice this asana in case of hyperthyroidism.");
                break;
                case "Vrikshasana":
                    listitem(id,"Do not bend the arms in elbows.");
                    listitem(id,"Do not lose the balance.");
                break;
                case "Trikonasana":
                    listitem(id,"Do not bend the arms in elbows.");
                    listitem(id,"Do not overstrain your left knee. (Important)");
                    listitem(id,"Do not bend the right leg in knee.");
                    listitem(id,"Do not try to align the left foot and right foot in one line.");
                    listitem(id,"Do not lift the sole of the back foot off the ground.");
                    listitem(id,"Do not lose the balance.");
                break;
                case "Ardha_Chakrasana":
                    listitem(id,"In the neck, spinal or hip injury avoid Half Wheel Pose. Those people who have Vertigo be very cautious during Practice. Patients of very high B.P. should not attempt Half Wheel Pose. Those poses, which puts any type of strain on Foetus should not be performed by pregnant women.");
                break;
                case "Veerbhadrasana":
                    listitem(id,"Do not bend the arms in elbows and the right leg in knee.");
                    listitem(id,"Do not try to align the left foot and right foot in one line.");
                    listitem(id,"Do not lose the balance.");
                break;   
                case "Garudasana":
                    listitem(id,"Do not do this asana if you have ankle injury.");
                    listitem(id,"Do not do this asana if you are suffering from hip problems.");
                break; 
                
                case "Hastapadasana":
                    listitem(id,"Do not bend the legs in knees.");
                    listitem(id,"Do not overstrain the neck while bending forward.");
                break;
                case "Badhakonasana":
                    listitem(id,"Don't stick out your front ribs while your hands are clasped behind your back. The hand in contact with your thoracic spine triggers a lifting of the heart and a sense of lifting and spreading in the upper back, but these sensations are lost if the front ribs jut out. Instead, focus on broadening the low back and dropping the coccyx down and forward to soften the front ribs and lift the center point of the pelvic floor.");
                break;
                case "Paschimottanasana":
                    listitem(id,"Do not bend the legs in knees.");
                    listitem(id,"Do not overstrain the neck while bending forward.");
                break;
                case "Poorvottanasana":
                    listitem(id,"Don't keep your feet together.");  
                    listitem(id,"Don't lift your hips higher than your shoulders - otherwise you are moving into a downward dog.");
                    listitem(id,"Don't have your shoulders behind the wrists - downward dog again.");
                    listitem(id,"Don't let your head fall below the spine.");
                    listitem(id,"Don't let the knees bend and belly sag if the pose feels too challenging and the body is fatigued. Bring the knees down instead!");
                break;
                case "Padmasana":
                    listitem(id,"People with severe back pain, ankle pain, sprain in the leg and knee enjuiry should not perform this asana.");
                break;
                case "Shishuasana":
                    listitem(id,"Don't overstretch your hands in the front.");
                    listitem(id,"Don't raise your hip during this asana.");
                    listitem(id,"Don't separate your legs while practising this asana.");
                break;
                case "Gomukhasana":
                    listitem(id,"Don't stick out your front ribs while your hands are clasped behind your back. The hand in contact with your thoracic spine triggers a lifting of the heart and a sense of lifting and spreading in the upper back, but these sensations are lost if the front ribs jut out. Instead, focus on broadening the low back and dropping the coccyx down and forward to soften the front ribs and lift the center point of the pelvic floor.");
                break;
                case "Dhanurasana":
                    listitem(id,"Do not bend the arms.");
                    listitem(id,"Do not drop the head.");
                break;
                case "Shalabhasana":
                    listitem(id,"Do not strain the body while performing this asana.");
                    listitem(id,"Don’t bend the knees or raise the chin above the floor.");
                break;
                case "Bhujangasana":
                    listitem(id,"Do not have any distance between the legs.");
                    listitem(id,"Don’t let the shoulders hunch upwards towards ears.");
                    listitem(id,"Don’t let the elbows point away from the body.");
                break;
                case "Salamba_Bhujangasana":
                    listitem(id,"Do not have any distance between the legs.");
                    listitem(id,"Do not let the shoulders hunch upwards towards the ears.");  
                break;
                case "Viparita_Shalabhasana":
                    listitem(id,"Do not raise your hands more than your legs.");
                    listitem(id,"Do not start practising this asana with the legs apart.");
                    listitem(id,"Keep your gaze in the front.");
                break; 
                case "Makara_Adho_Mukha_Svanasana":
                    listitem(id,"Do not lower your back portion.");
                    listitem(id,"Do not lossen your feet.");
                    listitem(id,"Divide your body weight equally on both the hands.");
                break;
                case "Matsyasana":
                    listitem(id,"Do not move or pull or turn the neck while you are in the position.");
                    listitem(id,"Do not remove the support of the elbows to neck.");
                break; 
                case "Utkatasana":
                    listitem(id,"Do not Practice this asana if you are suffering from shoulder pain.");
                    listitem(id,"Ladies should not practice this asana in case of periods.");
                break;
                case "Sarvangasana":
                    listitem(id,"Do not bend the legs in knees. ");
                    listitem(id,"Do not take the legs over your head in the position, but you can take the legs over your head while taking & releasing the position.");
                    listitem(id,"Do not move the neck or overstrain it in chin lock position.");
                break;
                case "Vishnuasana":
                    listitem(id,"Don't do Step 3 where your prop your head up with your hand, if you're really tipping a lot.");
                    listitem(id,"Don't let the body fall forward or backwards.");
                break;
                case "Naukasana":
                    listitem(id,"Do not bend the legs in knees.");
                    listitem(id,"Do not bend the arms in elbows.");
                break;
                case "Natrajasana":
                    listitem(id,"Don’t do this yoga if you are having low blood pressure.");
                    listitem(id,"Avoid excessive stretching.");
                break;
                case "Pavanmuktasana":
                    listitem(id,"Do not strain your neck.");
                break;
                case "Surya_Namaskar":
                    listitem(id,"This posture should be avoided in case of slipped disc or cervical spondylitis. In cases of sciatica, guidance of an expert is a must.");
                    listitem(id,"May aggravate headaches or diarrhea;");
                    listitem(id,"Do not collapse into that shoulder, but keep that shoulder relaxed and your neck long.");
                break;
                case "Chakrasana":
                    listitem(id,"Exert excessive force, which may cause undue strain onto the arms while lifting the body up into the position. Force yourself into getting the arch in the spine. Strain and tense up the body while moving into the pose and/or while doing the pose.");
                break;
                case "Patangasana":
                    listitem(id,"Don't stick out your front ribs while your hands are clasped behind your back. The hand in contact with your thoracic spine triggers a lifting of the heart and a sense of lifting and spreading in the upper back, but these sensations are lost if the front ribs jut out. Instead, focus on broadening the low back and dropping the coccyx down and forward to soften the front ribs and lift the center point of the pelvic floor.");
                break;
                case "Ushtrasana":
                    listitem(id,"Don’t pinch the shoulders together, tensing the neck.");
                    listitem(id,"Don’t crunch the lower back by squeezing the butt, pushing the knees wider than hip-width apart, or pooching the belly.");
                break;
                case "Ardha_Matsyendrasana":
                    listitem(id,"Don't forget to distribute the twist evenly throughout the entire length of the spine");
                    listitem(id,"Don't concentrate it in the lower back. Stay for 30 seconds to 1 minute, then release with an exhalation, return to the starting position");
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
                case "Padma_Sarvangasana":
                    listitem(id,"It should not be practiced by people suffering from Diarrhea.");
                    listitem(id,"It should not be practiced by people with Slipped disc.");
                    listitem(id,"Do not over exert yourself while practicing Padma Sarvangasana or The Lotus in Shoulder Stand Pose.");
                    listitem(id,"People suffering from chronic spinal problems should not practice The Lotus in Shoulder Stand Pose.");
                break;
                case "Bakasana":
                    listitem(id,"Make sure you don’t over rotate when increasing wheelbase for improved stability");
                    listitem(id,"Don't raise the buttocks too high as that put excessive stress on the arms. Don't try to jump your feet off the floor.");
                    listitem(id,"People who suffer from any of this condition must avoid practicing Bakasana: recent wrist or shoulder injury, heart problems, carpal tunnel syndrome or cerebral thrombosis.");
                break;
                case "Kashypasana":
                    listitem(id,"Do not increase the duration suddenly.");
                    listitem(id,"Do not over push your limits.");
                break;
                case "Marjariasana":
                    listitem(id,"Do not keep your hands too far or too close to your body.");
                    listitem(id,"Do not perform the exercise too fast.");
                break;
                default:
                    listitem(id,"The don'ts of this asana couldn't be found.");
                break;
                //listitem(id,"");
            }
        }


















        // A small paragraph for the asana's tips
        function tips()
        {
            var id="tip";
            switch(asana_name)
            {
                case "Shavasana":
                    document.getElementById(id).innerHTML="This pose may seem easy to perform, Shavasana is one of the hardest poses to master. Although this pose doesn’t require as much flexibility or physical strength, Shavasana emphasizes your self-control while challenging your body, mind, and spirit.";
                break;
                case "Vajrasana":
                    document.getElementById(id).innerHTML="Joint pain sufferers should consult a Yoga expert before practicing the Vajrasana. Also, Before you start a yoga program, check with your doctor.";
                break;
                case "Adhvasana":
                    document.getElementById(id).innerHTML="This asana does not have any tips because it is a very simple asana";
                break;
                case "Parvatasana":
                    document.getElementById(id).innerHTML="Lengthen the spine from the crown of the head and strongly engage your core muscles. Also,Open the chest towards the ceiling and draw the shoulder blades back and down.";
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
                case "Halasana":
                    document.getElementById(id).innerHTML="The best way to do this asana is to place folded blankets under your shoulders. This lends some support to your upper body and neck. And about Breathing, Inhale and hold on to your breath while you get into the pose. Exhale and then steady your breath while in the pose. When you want to resume your earlier position, breathe and hold on to it again."
                break;
                case "Vashishtasana":
                    document.getElementById(id).innerHTML="Beginners often have a difficult time sustaining this pose, even with the soles pressed to a wall. Perform Adho Mukha Svanasana with your heels up on a wall. Measure the distance between your right foot and right hand, then step the foot halfway to the hand. Keep the right foot on the floor for support and turn the toes out to the right. Then shift onto the outside of the left foot, press the sole against the wall, and turn onto the left hand as described above.";
                break;
                case "Mayurasana":
                    document.getElementById(id).innerHTML="You must remember that Mayurasana is a form of an advanced pose. Therefore you should have sufficient knowledge and skill on other poses before you start practicing this asana. Make sure that you have strong hands, wrists, overall strength as well as control over your body. You should also have greater mental focus before you perform this asana. You should also keep your belly empty before performing this asana. Make sure that you complete your meals at least 4 to 6 hours prior to practicing this asana. Additionally, you must only practice this asana under the close supervision of a yoga teacher. The best time to practice this asana is during the wee hours of the early morning. However, in case you are not able to do so, you can still practice it during the evening.";
                break;
                case "Anantasana":
                    document.getElementById(id).innerHTML="If it is difficult to hold the toe then the hand can remain on the ground in front of the chest.";
                break;
                case "Malasana":
                    document.getElementById(id).innerHTML="If squatting is difficult, sit on the front edge of a chair seat, thighs forming a right angle to your torso, heels on the floor slightly ahead of your knees. Lean your torso forward between the thighs.";
                break;
                case "Tiryak_Bhujangasana":
                    document.getElementById(id).innerHTML="It is important to enjoy and understand the body during the practice of any yoga pose, so in Cobra Poses (Bhujangasana), try and avoid pushing the back beyond your limit. In order to get the back a bit comfortable, you could bend the elbows a bit backwards and release the stress around the lower back and if the wrists are not strong to be placed on the floor directly, you could use a blanket to give that extra support and enjoy the yoga pose.";
                break;
                case "Vrikshasana":
                    document.getElementById(id).innerHTML="Those with high blood pressure may do this pose but without raising their hands overhead, as this may further raise their blood pressure";
                break;
                case "Trikonasana":
                    document.getElementById(id).innerHTML="Unlike most yoga postures, the Triangle Pose requires keeping the eyes open in order to maintain body balance. Those with high blood pressure may do this pose but without raising their hand overhead, as this may further raise the blood pressure.";
                break;
                case "Ardha_Chakrasana":
                    document.getElementById(id).innerHTML="If you are worried about to perform full wheel pose, then attempt Ardha Chakrasana in place of performing Chakrasana. Half wheel Pose is simple and easy to perform Asana. Ardha Chakrasana is helpful for those who are not comfortable with Full Wheel Pose (Chakrasana). First, try half wheel Pose and once you’ll get enough flexibility on your back then go for Chakrasana.";
                break;
                case "Veerbhadrasana":
                    document.getElementById(id).innerHTML="Veerabhadrasana especially benefits pregnant ladies in their second and third trimester provided they have been practicing yoga regularly. Practice Virabhadrasana while standing close to a wall so you can support yourself if required.  However do consult your doctor before doing this yoga posture.";
                break;
                case "Garudasana":
                    document.getElementById(id).innerHTML="Beginning students often find the balance in this pose very unstable. As with all standing balancing poses, you can use a wall to brace and support your back torso while you’re learning to balance.";
                break;
             
                case "Hastapadasana":
                    document.getElementById(id).innerHTML="Beginners try to stay in this asana for long duration (30sec-45sec) in the initial attempts but it should be increased gradually according to the practitioner's comfort level.";
                break;
                case "Badhakonasana":
                    document.getElementById(id).innerHTML="For those who have tight shoulders, it can be difficult for you to effectively clasp your fingers right behind your back. To help yourself in this regard, you can use a strap that makes this process a lot easier. Start performing the pose by having a strap draped evenly over the shoulder of your lower arm. Now slide lower arm to your back and then grip the strap’s free end with your upper arm. Make sure that you try and slide your other arm as far as possible towards the top of your back.";
                break;
                case "Paschimottanasana":
                    document.getElementById(id).innerHTML="To perform paschimottanasana technically right is not an easy task. It requires practice of weeks and months. On the other hand, one shouldn’t bend forward beyond a certain limit otherwise it can cause severe back pain. Initially, one should bend forward as far as he feels comfortable. After developing back flexibility and back muscle suppleness, one will be able to perform paschimottanasana.";
                break;
                case "Poorvottanasana":
                    document.getElementById(id).innerHTML="if you are in proper alignment and working the legs and engaging the core, there will be less weight onto the wrists.";
                break;
                case "Padmasana":
                    document.getElementById(id).innerHTML="Incorporating any Mudra while sitting in Padmasana, will deepen the mind. The preferred Mudra for the Padmasana are Bhrama mudra, Chinmayi mudra, Chin mudra and Adi mudra."
                break;
                case "Shishuasana":
                    document.getElementById(id).innerHTML="Keeping both the legs together while practicing this asana will divide the body weight equally on both the legs and hence no leg will bear more pressure. This can make you stay longer in this pose.";
                break;
                case "Gomukhasana":
                    document.getElementById(id).innerHTML="For those who have tight shoulders, it can be difficult for you to effectively clasp your fingers right behind your back. To help yourself in this regard, you can use a strap that makes this process a lot easier. Start performing the pose by having a strap draped evenly over the shoulder of your lower arm. Now slide lower arm to your back and then grip the strap’s free end with your upper arm. Make sure that you try and slide your other arm as far as possible towards the top of your back."
                break;
                case "Dhanurasana":
                    document.getElementById(id).innerHTML="Sometimes beginners find it difficult to lift their thighs away from the floor. You can give your legs a little upward boost by lying with your thighs supported on a rolled-up blanket."
                break;
                case "Shalabhasana":
                    document.getElementById(id).innerHTML="Only raise the legs as far as it is comfortable, do not allow the legs to tremble. Advanced variation: Arms inserted below the thighs with palms facing downwards or upwards if that is uncomfortable to help raise the legs more. Another variation is to have the hands together with fingers interlocked, supporting on the ground.";
                break;
                case "Bhujangasana":
                    document.getElementById(id).innerHTML="Forward bends are associated with softness and surrender. Try practicing Cobra with a quiet sense of introspection to temper your willpower and remind you that yoga is always about balance and contentment."
                break;
                case "Salamba_Bhujangasana":
                    document.getElementById(id).innerHTML="Roll up a towel and arrange it in a U-shape on the floor. Lie with the bottom of the U just above your pubic bone and the legs of the U under the sides of your belly to help support the belly lift.";
                break;
                case "Viparita_Shalabhasana":
                    document.getElementById(id).innerHTML="Beginners sometimes have difficulty holding this pose. You can support the area around your lower sternum with a rolled-up blanket to help maintain the lift of your upper torso. Similarly you can support the front of your thighs with a blanket roll to help support the lift of your legs.";
                break;
                case "Makara_Adho_Mukha_Svanasana":
                    document.getElementById(id).innerHTML="This asana seems simple to practice but it is a painful asana to perform. All of the body weight is kept up by the abdomen muscles. So, the duration should be increased gradually.";
                break;
                case "Matsyasana":
                    document.getElementById(id).innerHTML="The best time to do this asana is during the early morning. However, you can also practice this asana during the evening as well. As a beginner, you may feel some discomfort while practicing Matsyasana as you may inadvertently strain your neck. So in case you experience any pain in the throat or neck area, lower your chest somewhat closer towards the ground surface or just keep a thick blanket under your head. If you want, you can also use the help of a partner who can offer additional support to your body. This can help you to master this yoga pose for the neck for more easily."
                break;
                case "Utkatasana":
                    document.getElementById(id).innerHTML="If you are having trouble relaxing into this pose, stop trying to force yourself into a shape your body isn’t ready to make. Try one or more of the above precautions.";
                break;
                case "Sarvangasana":
                    document.getElementById(id).innerHTML="Until perfect balance is secured, one may take the aid of any object against which to fall back. In the beginning, improvise this pose by resting against a wall or any solid object while in the head-low position. The aid of a few pillows or personal assistance from another person should be acceptable during the initial practice."
                break;
                case "Vishnuasana":
                    document.getElementById(id).innerHTML="If it is difficult to hold the toe then the hand can remain on the ground in front of the chest.";
                break;
                case "Naukasana":
                    document.getElementById(id).innerHTML="It is very much important that naukasana position which are about five poses and counters as well to complete the practice. Above all, it should start practice from beginner and slow reach to an advanced level of this Asana.";
                break;
                case "Natrajasana":
                    document.getElementById(id).innerHTML="Dancer's pose (aka natarajasana in Sanskrit) is one of my favorite poses and I know I'm not alone so I thought I'd put together a list of tips for the pose and ways to switch it up in case you wanted to play around with it. Above is the 'regular' dancer's pose. The first rule of dancer's pose is that there is no 'right' way. Bikram yoga will instruct one way, various vinyasa teachers will teach it a different way. Just go with what works for you.";
                break;
                case "Pavanmuktasana":
                    document.getElementById(id).innerHTML="It is best to practice this asana first thing every morning so that all the trapped gases in your digestive tract are released. This should also be one of the first asanas you practice as once the gases are released, it will make practicing other asanas easier. Yoga must be practiced at least four to six hours after a meal, when your stomach and bowels are both empty."
                break;
                case "Surya_Namaskar":
                    document.getElementById(id).innerHTML="Keep your bottom heel, hip, and elbow in a straight line When the top leg lifts, there is a tendency for the pelvis and the lower leg to roll backward. adjust this by balancing through the hip region, rather than rotating the spine. If your buttocks stick out behind you, draw your sacrum into your body and you ground yourself through your pelvis and lengthen through the bottom leg."
                break;
                case "Chakrasana":
                    document.getElementById(id).innerHTML="You can maintain this Chakrasana pose for 30 seconds to 3 minute as per your individual requirements or capacity.Breath-in as raise your body in to Chakrasana position, breath-out as you are coming down and bend your legs and arms slowly, bend the chin towards your chest, as well as gently release your shoulders, waist, buttocks and head onto ground. Finally, you can breathe and relax normally."
                break;
                case "Patangasana":
                    document.getElementById(id).innerHTML="For those who have tight shoulders, it can be difficult for you to effectively clasp your fingers right behind your back. To help yourself in this regard, you can use a strap that makes this process a lot easier. Start performing the pose by having a strap draped evenly over the shoulder of your lower arm. Now slide lower arm to your back and then grip the strap’s free end with your upper arm. Make sure that you try and slide your other arm as far as possible towards the top of your back."
                break;
                case "Ushtrasana":
                    document.getElementById(id).innerHTML="As you extend your spine backward, you have to learn to distinguish between muscular and emotional intensity and between safe physical challenges and unsafe joint pain. Use your breath to cultivate a clear, calm mind, which can help you focus on and detect subtle sensations, such as strain within, rather than letting your ego be the driver of your asana practice, which can force your body into an aesthetic shape for which you may not be ready."
                break;
                case "Ardha_Matsyendrasana":
                    document.getElementById(id).innerHTML="When practicing ardha matsyendrasana, if you feel like you're going to tip over, or your back is rounding, place a block or blanket underneath your hips. This should enable the pelvis to tip forward, making it easier to feel stable and prevent the back from rounding."
                break;
                case "Veerasana":
                    document.getElementById(id).innerHTML="Often the inner top feet press more heavily into the floor than the outer top feet. Press the bases of your palms along the outer edges of the feet and gently push the pinky-toe sides of the feet to the floor."
                break;
                case "Ashwa_Sanchalanasana":
                    document.getElementById(id).innerHTML="Equestrian pose can be modified for those with knee problems by lifting the back knee or placing a blanket or cushion underneath it. If it is uncomfortable for the neck, the head does not have to be lifted in this posture."
                break;
                case "Kati_Chakrasana":
                    document.getElementById(id).innerHTML="Keep your movements slow and graceful. Avoid moving your body with a jerk. You get better benefits when you coordinate your movements gracefully with the breath."
                break;
                case "Tadasana":
                    document.getElementById(id).innerHTML="Stretch your shoulders, arms and chest upwards while your toes bear your body weight. Feel the stretch in your body from the head to the feet. Hold this pose for about 5 to 10 seconds and then gently exhale. "
                break;
                case "Padma_Sarvangasana":
                    document.getElementById(id).innerHTML="To stabilize your body while practicing Padma Sarvangasana or The Lotus in Shoulder Stand Pose, you can rest your hands on the legs just beside the knees while in this pose. While doing this, the fingers of your hands will be directed inwards towards your body. Please, note that the vertebra should not be loaded and also should not take the entire weight of your body and legs. The weight of your body should be evenly distributed between your shoulders and the nape of your neck. Padma Sarvangasana or The Lotus in Shoulder Stand Pose is an advanced pose and should be practiced with constant efforts and under the guidance of a trained Yoga Expert.";
                break;
                case "Bakasana":
                    document.getElementById(id).innerHTML="Beginners tend to move into this pose by lifting their buttocks high away from their heels. In Bakasana try to keep yourself tucked tight, with the heels and buttocks close together. When you are ready to take the feet off the floor, push the upper arms against the shins and draw your inner groins deep into the pelvis to help you with the lift.";
                break;
                case "Kashypasana":
                    document.getElementById(id).innerHTML="The Half Lotus component of Kasyapasana is unique. In most postures that include Half Lotus, the hip joint is flexed; in Kasyapasana, it is extended, which requires even more flexibility in the adductors, or inner legs, and hip flexors. This means having to work the muscles on all sides of the joint to prepare your outer hips for Kasyapasana. Helpful prep poses include Eka Pada Rajakapotasana (One-Legged King Pigeon Pose) and Gomukhasana (Cow Face Pose).";
                break;
                case "Marjariasana":
                    document.getElementById(id).innerHTML="Do not do this pose if you have a spine or knee injury.";
                break;
                default:
                    document.getElementById(id).innerHTML="The tips for this asana couldn't be found. Sorry!";
                break;
            }
        }