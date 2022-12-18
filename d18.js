const input = `8,16,18\n12,15,19\n14,19,12\n4,6,8\n16,8,16\n10,2,8\n10,15,18\n13,2,11\n6,5,10\n15,10,3\n19,9,7\n11,4,4\n17,13,14\n10,6,17\n16,4,8\n6,18,10\n15,4,14\n12,4,7\n2,9,10\n18,14,10\n4,9,4\n7,9,2\n15,4,7\n6,6,3\n6,18,14\n13,3,15\n10,14,19\n18,7,10\n15,6,6\n3,10,5\n6,6,16\n7,16,8\n6,11,2\n17,17,10\n16,18,9\n8,18,6\n7,3,8\n12,14,3\n12,3,13\n2,14,11\n7,16,15\n14,7,18\n11,19,7\n17,14,17\n4,17,8\n7,17,8\n18,9,6\n18,5,11\n3,10,12\n9,11,16\n3,13,13\n12,19,9\n16,18,12\n7,4,7\n3,10,15\n17,12,16\n17,16,7\n14,18,8\n18,15,6\n9,12,19\n6,3,14\n3,10,14\n16,11,4\n9,5,17\n9,16,3\n3,12,6\n9,11,20\n16,6,7\n4,6,12\n9,11,1\n13,5,16\n15,5,14\n19,10,8\n19,13,15\n1,9,11\n4,13,14\n4,14,6\n5,4,10\n6,5,11\n8,14,18\n12,20,11\n8,9,2\n18,15,15\n11,17,15\n9,6,18\n5,16,7\n5,18,13\n15,8,17\n3,6,9\n11,11,1\n17,11,6\n13,19,12\n6,5,12\n14,10,4\n12,13,18\n12,8,2\n8,5,18\n15,4,13\n17,9,4\n4,6,6\n18,7,13\n13,12,3\n7,17,15\n9,19,7\n17,17,11\n13,15,17\n16,9,18\n8,11,19\n16,5,16\n12,3,8\n5,14,15\n13,17,7\n15,12,3\n3,14,12\n16,6,13\n16,4,10\n3,13,14\n3,16,7\n8,10,3\n18,8,7\n17,8,16\n4,10,18\n6,15,4\n17,4,15\n9,19,13\n7,17,9\n14,12,3\n7,2,9\n3,10,7\n12,18,8\n14,15,4\n11,20,11\n19,6,12\n10,16,3\n14,16,12\n16,8,3\n5,4,8\n11,8,2\n8,15,18\n7,5,13\n9,14,3\n20,9,14\n5,10,19\n12,6,4\n16,5,15\n13,9,3\n14,13,18\n5,12,5\n12,10,3\n17,7,5\n10,17,3\n16,13,15\n9,3,15\n17,10,16\n13,15,2\n10,1,7\n15,7,15\n16,14,15\n19,9,14\n9,3,14\n15,2,12\n6,2,13\n4,7,15\n8,6,18\n5,8,4\n20,13,10\n1,13,9\n15,12,4\n15,5,4\n8,6,4\n12,3,6\n4,4,11\n15,11,17\n12,3,7\n4,17,10\n9,4,8\n8,18,9\n7,17,14\n19,13,9\n11,9,18\n20,12,10\n6,14,8\n14,4,16\n7,3,10\n10,5,16\n9,13,19\n7,4,14\n11,5,5\n17,17,9\n17,5,14\n16,6,6\n16,14,16\n6,4,12\n15,14,12\n18,15,7\n15,8,3\n2,9,7\n14,15,3\n5,17,13\n19,8,8\n15,4,12\n10,15,5\n16,8,6\n8,11,20\n16,6,9\n10,16,16\n17,10,15\n3,8,5\n15,1,11\n7,4,8\n16,3,11\n10,18,7\n16,11,18\n5,8,3\n8,10,1\n17,11,15\n12,16,3\n4,16,8\n13,13,19\n18,14,14\n6,6,7\n3,13,6\n12,13,2\n12,6,14\n5,11,4\n10,7,3\n13,7,18\n11,18,8\n10,1,10\n4,9,13\n18,9,15\n7,17,5\n9,18,5\n16,16,8\n13,6,5\n17,9,13\n13,16,9\n5,10,4\n16,15,9\n6,5,13\n18,12,12\n4,7,14\n18,13,15\n9,6,6\n10,10,18\n14,9,18\n17,8,4\n3,7,14\n4,11,16\n12,16,5\n15,17,10\n9,6,5\n11,4,16\n10,5,4\n8,14,17\n18,5,12\n6,16,4\n4,5,8\n13,11,17\n17,7,9\n11,1,13\n16,8,18\n6,12,17\n10,20,9\n14,4,5\n13,8,3\n12,12,20\n6,6,4\n10,6,16\n14,17,6\n7,14,2\n4,13,5\n17,9,15\n5,16,6\n15,6,7\n14,17,15\n11,2,13\n13,4,16\n8,4,14\n11,13,19\n7,7,18\n11,16,18\n17,6,6\n6,3,9\n4,7,8\n7,10,4\n9,8,2\n10,13,19\n5,16,12\n14,14,18\n12,18,13\n13,3,10\n6,3,12\n16,7,5\n13,13,2\n16,19,9\n11,1,9\n17,9,6\n18,13,13\n10,12,19\n18,4,11\n12,6,3\n12,3,16\n3,13,8\n11,10,17\n8,13,1\n2,10,12\n15,7,17\n13,17,14\n16,4,11\n17,10,18\n16,13,3\n12,13,19\n2,9,14\n7,9,3\n17,6,10\n9,2,8\n2,8,15\n4,15,7\n16,5,5\n14,9,2\n4,7,17\n7,11,2\n10,3,14\n8,11,3\n3,7,11\n8,4,17\n14,16,5\n9,19,14\n10,10,1\n20,10,12\n12,15,3\n11,19,13\n16,10,6\n11,9,1\n14,17,16\n6,10,4\n16,7,6\n2,12,11\n12,6,19\n20,12,9\n13,17,8\n3,15,11\n4,5,13\n16,8,15\n10,6,4\n10,3,13\n1,7,11\n12,18,15\n12,18,11\n12,10,2\n7,7,3\n4,12,11\n8,19,6\n4,14,4\n4,14,16\n7,14,3\n9,13,2\n15,3,11\n12,18,9\n16,10,18\n5,12,3\n7,3,12\n13,6,16\n1,6,11\n8,18,16\n6,9,4\n18,10,5\n17,15,8\n8,16,16\n17,15,4\n3,10,9\n17,13,5\n18,11,5\n7,11,18\n10,19,7\n9,16,5\n9,15,3\n17,6,7\n12,18,7\n10,17,5\n8,17,17\n16,14,13\n18,14,8\n11,7,19\n17,8,7\n4,15,8\n13,19,7\n8,2,11\n5,16,10\n4,8,8\n8,2,10\n7,12,1\n13,18,12\n11,19,11\n2,10,8\n17,13,12\n5,3,11\n9,6,4\n3,10,8\n5,14,5\n18,9,16\n16,8,4\n3,9,14\n9,13,17\n4,3,12\n11,6,17\n13,3,8\n2,8,14\n5,7,6\n8,2,14\n2,15,13\n8,4,13\n12,1,13\n15,13,4\n15,5,16\n9,9,20\n5,2,11\n10,7,18\n17,16,8\n19,8,11\n10,14,3\n18,13,11\n14,18,14\n5,18,7\n13,2,10\n7,18,15\n19,14,11\n6,10,19\n15,7,16\n3,14,9\n17,13,13\n15,17,6\n5,6,16\n9,20,9\n16,10,4\n16,11,17\n7,11,19\n11,9,17\n12,17,16\n13,15,6\n5,13,17\n5,14,7\n5,9,5\n16,5,9\n15,17,15\n16,8,5\n3,7,9\n18,17,11\n16,17,7\n12,15,17\n4,13,7\n9,8,18\n5,16,11\n13,17,17\n13,3,7\n4,13,16\n4,15,15\n19,7,9\n10,18,14\n15,13,17\n8,3,16\n11,15,19\n11,2,8\n10,18,16\n14,14,16\n18,14,9\n14,4,15\n10,18,10\n14,3,14\n8,19,9\n7,4,15\n13,13,18\n11,18,5\n15,18,9\n10,15,3\n13,16,4\n10,13,17\n16,4,7\n4,6,15\n14,5,17\n11,18,14\n9,3,16\n8,19,8\n12,10,21\n15,19,12\n8,9,1\n15,14,18\n4,4,12\n5,7,5\n10,13,20\n16,12,17\n16,11,2\n10,3,4\n15,9,17\n13,11,19\n14,10,2\n8,6,16\n5,17,11\n10,12,20\n4,9,16\n11,1,10\n6,18,9\n15,6,4\n6,11,3\n7,3,9\n12,18,12\n1,13,14\n4,14,13\n17,12,14\n9,1,12\n9,19,9\n18,6,15\n9,18,15\n5,5,7\n11,11,19\n4,8,13\n12,5,4\n2,11,13\n12,5,3\n15,3,8\n9,18,11\n9,19,15\n3,12,7\n18,12,7\n15,6,18\n12,5,17\n2,14,10\n13,18,13\n18,6,12\n4,10,4\n13,19,8\n4,16,9\n13,5,12\n9,15,17\n4,15,10\n5,8,15\n14,13,4\n7,19,11\n18,13,12\n8,3,13\n16,5,12\n1,7,10\n3,13,7\n17,12,3\n10,9,2\n10,3,8\n16,3,10\n5,7,7\n3,12,5\n17,14,13\n4,16,14\n3,13,15\n14,5,16\n14,18,13\n15,6,2\n14,8,4\n6,3,13\n6,9,3\n11,5,4\n15,5,9\n19,14,9\n5,8,5\n7,14,18\n18,12,8\n9,8,3\n4,16,15\n11,16,3\n14,18,9\n11,5,17\n3,11,16\n8,20,14\n10,12,2\n18,14,13\n10,3,12\n18,9,8\n3,10,10\n6,12,18\n3,14,11\n12,11,2\n14,13,17\n15,15,7\n9,10,2\n18,15,8\n20,11,12\n20,10,10\n17,14,12\n13,4,17\n15,10,16\n10,8,2\n9,19,10\n17,7,10\n14,8,5\n5,6,14\n9,17,14\n5,3,12\n11,14,16\n8,4,8\n17,6,8\n9,4,15\n6,18,13\n5,11,3\n14,14,15\n15,7,19\n3,10,17\n7,16,6\n10,19,12\n18,13,7\n17,7,6\n16,6,8\n7,4,6\n5,14,18\n9,7,18\n12,12,19\n13,8,18\n8,13,18\n13,16,15\n19,13,6\n4,9,14\n18,12,16\n14,18,11\n13,4,5\n6,17,15\n17,9,11\n10,14,2\n12,19,10\n19,8,6\n8,18,7\n10,12,18\n13,2,8\n5,5,8\n5,8,16\n15,9,18\n5,12,15\n10,19,14\n5,4,14\n12,5,15\n19,8,12\n19,13,8\n6,18,12\n8,17,10\n8,3,14\n7,8,4\n5,9,17\n14,6,6\n15,10,17\n14,7,4\n7,6,4\n13,5,17\n12,2,9\n15,17,8\n17,11,14\n1,11,9\n18,13,8\n9,17,7\n19,9,13\n18,8,14\n11,2,10\n8,12,2\n17,11,16\n3,9,4\n12,9,3\n13,4,6\n15,17,16\n13,12,4\n19,11,13\n8,8,2\n13,18,6\n2,10,6\n14,13,2\n16,7,16\n16,5,8\n7,8,19\n4,10,6\n4,4,9\n5,16,5\n11,7,5\n16,15,12\n14,13,19\n18,7,7\n19,13,13\n19,10,6\n8,20,9\n16,10,15\n15,3,9\n18,7,16\n17,6,13\n9,20,11\n15,10,1\n6,16,7\n11,8,20\n14,8,17\n3,16,14\n7,18,12\n7,15,7\n6,14,16\n6,16,14\n3,8,15\n18,16,15\n10,4,4\n3,16,9\n16,6,17\n10,5,17\n12,3,10\n15,5,15\n5,17,7\n14,17,4\n5,4,7\n13,16,17\n13,16,3\n7,18,7\n12,7,3\n7,12,3\n19,11,10\n19,6,8\n5,17,10\n3,7,15\n6,16,6\n3,7,12\n9,17,17\n11,7,18\n17,7,16\n6,4,7\n4,5,15\n18,9,14\n7,18,11\n9,6,16\n13,17,4\n5,17,5\n19,12,12\n3,5,9\n6,7,18\n7,4,11\n8,19,13\n10,7,2\n15,19,11\n4,15,13\n8,7,15\n8,14,19\n19,15,12\n18,9,9\n2,14,12\n10,3,15\n2,12,13\n7,16,17\n4,10,8\n4,5,14\n3,11,13\n18,11,13\n11,3,14\n7,4,16\n6,9,15\n1,9,13\n12,9,4\n5,5,17\n14,11,4\n6,13,17\n8,3,15\n6,11,4\n6,15,17\n17,13,7\n11,8,18\n5,16,13\n14,15,5\n15,2,13\n18,16,11\n10,10,2\n10,19,11\n15,15,4\n9,16,2\n7,18,14\n1,10,9\n8,6,19\n12,14,16\n10,20,14\n8,12,19\n11,6,3\n17,4,14\n6,10,17\n10,17,16\n8,13,16\n5,15,17\n12,16,17\n4,5,7\n9,19,8\n11,4,5\n16,6,15\n8,2,8\n3,12,14\n15,18,11\n5,17,8\n10,16,17\n10,17,18\n13,4,4\n14,12,2\n3,13,9\n4,8,6\n19,8,14\n16,13,5\n15,12,6\n14,9,3\n10,4,16\n12,2,12\n17,15,12\n2,12,14\n5,13,14\n14,11,18\n16,15,17\n4,8,14\n9,12,1\n15,16,7\n15,18,8\n17,15,7\n19,6,9\n17,12,4\n7,3,14\n8,13,2\n16,7,12\n8,8,17\n11,19,6\n6,9,18\n17,7,13\n2,15,8\n6,5,6\n4,12,15\n9,7,17\n16,17,8\n8,7,17\n10,15,4\n12,11,19\n16,4,13\n3,7,10\n8,2,12\n10,18,5\n18,4,10\n13,9,2\n6,8,4\n4,8,7\n13,13,17\n13,14,1\n6,10,3\n8,17,16\n13,6,4\n5,9,16\n6,13,6\n12,12,3\n14,15,15\n16,15,6\n6,6,14\n16,12,15\n13,3,17\n13,14,4\n6,6,17\n14,6,4\n7,7,4\n3,16,10\n11,5,2\n9,17,18\n2,7,8\n7,13,3\n15,14,17\n16,13,17\n9,13,3\n7,11,3\n13,17,5\n2,6,9\n12,12,2\n16,12,5\n15,5,17\n16,6,10\n5,10,14\n10,20,13\n20,10,13\n7,8,3\n19,14,14\n15,9,3\n4,11,4\n15,12,18\n13,7,15\n6,17,17\n18,6,13\n12,19,8\n17,16,16\n16,3,14\n11,8,17\n15,4,4\n18,10,16\n17,10,7\n15,17,14\n17,16,14\n16,11,3\n18,6,10\n17,5,7\n4,11,15\n7,16,5\n7,5,2\n1,11,8\n11,9,20\n2,10,15\n4,12,4\n11,6,19\n10,17,19\n7,7,16\n14,12,18\n10,17,4\n5,5,14\n4,5,10\n13,17,11\n1,10,10\n11,6,18\n13,5,15\n11,15,16\n6,17,6\n4,8,16\n3,15,8\n16,6,14\n5,15,7\n13,3,16\n11,17,14\n3,6,12\n12,2,10\n13,15,7\n18,8,5\n10,16,5\n6,4,15\n8,1,9\n6,6,8\n18,7,6\n19,9,11\n11,11,20\n3,9,11\n11,19,14\n15,12,16\n6,13,4\n6,17,7\n3,14,16\n13,10,18\n15,15,16\n16,10,5\n10,19,8\n19,12,7\n18,15,12\n4,4,7\n19,11,7\n12,2,11\n13,18,16\n5,5,16\n14,7,5\n6,16,5\n16,3,13\n12,17,7\n14,7,16\n11,3,9\n15,16,17\n17,15,11\n16,17,10\n8,10,19\n3,8,8\n5,5,13\n7,5,9\n16,3,9\n6,2,10\n3,8,7\n8,12,3\n12,4,16\n12,2,5\n20,9,11\n15,6,16\n9,19,11\n14,18,7\n17,11,5\n18,8,10\n8,14,2\n16,15,14\n7,7,6\n5,12,4\n8,8,3\n7,4,4\n17,5,10\n8,10,2\n16,18,15\n13,5,5\n6,5,14\n14,19,14\n3,11,14\n16,4,12\n8,13,3\n17,9,8\n9,13,18\n8,20,11\n11,20,9\n8,4,6\n14,6,5\n10,11,19\n5,12,16\n4,14,8\n3,11,15\n19,12,11\n14,9,1\n6,4,13\n17,4,10\n6,16,15\n18,8,6\n10,13,2\n15,7,7\n15,17,13\n13,18,15\n15,15,6\n8,3,10\n8,3,8\n10,9,3\n16,16,6\n7,15,17\n9,3,8\n18,11,4\n10,2,12\n6,1,11\n13,19,9\n13,11,2\n11,11,17\n7,16,4\n11,3,8\n7,9,4\n11,10,4\n11,4,14\n7,3,13\n15,4,8\n19,7,8\n9,2,14\n9,18,10\n16,17,15\n19,10,11\n2,8,8\n17,6,15\n10,16,14\n9,20,10\n13,2,12\n7,9,17\n19,14,12\n7,6,17\n11,14,19\n13,18,5\n8,1,7\n14,16,16\n5,7,15\n8,18,11\n17,17,12\n20,8,10\n4,6,5\n10,6,2\n18,14,12\n19,11,12\n12,19,6\n2,9,6\n4,13,6\n13,5,4\n6,5,8\n17,15,6\n9,6,2\n14,19,7\n6,17,10\n16,16,5\n4,15,12\n15,5,13\n3,7,7\n10,17,15\n9,20,12\n4,5,12\n7,18,10\n14,18,12\n15,2,9\n12,7,18\n6,6,5\n5,9,3\n15,5,8\n15,16,6\n20,12,11\n17,14,8\n4,13,17\n18,4,12\n2,9,12\n17,4,8\n10,16,18\n9,3,12\n2,8,10\n18,12,6\n9,4,12\n15,8,15\n12,20,10\n4,15,6\n6,15,5\n14,3,6\n7,14,14\n3,12,13\n3,7,13\n13,15,16\n16,14,7\n4,7,5\n14,11,2\n17,15,13\n4,16,6\n10,11,3\n14,4,14\n11,13,20\n6,16,17\n13,4,15\n9,5,3\n11,2,6\n13,12,1\n20,9,8\n5,4,11\n6,5,5\n15,13,3\n17,18,7\n16,7,14\n6,17,5\n19,9,9\n2,13,6\n8,12,20\n5,11,16\n4,10,16\n8,6,3\n17,7,14\n15,13,5\n5,14,17\n18,6,8\n18,11,8\n10,4,17\n13,3,14\n14,10,17\n3,6,13\n2,11,14\n2,7,9\n19,11,9\n14,18,15\n9,9,1\n5,14,16\n14,7,3\n13,2,7\n16,17,9\n18,10,6\n20,11,11\n11,6,7\n11,4,6\n7,17,17\n6,15,3\n5,6,7\n11,6,2\n17,15,9\n17,14,16\n15,16,12\n12,16,6\n19,12,6\n2,11,8\n7,17,4\n3,9,9\n4,9,17\n12,4,13\n17,7,7\n12,8,20\n8,19,12\n9,11,18\n13,16,7\n16,16,15\n4,10,14\n6,10,1\n3,7,16\n6,5,17\n7,14,19\n7,14,16\n15,16,4\n14,2,10\n4,8,3\n12,5,16\n12,4,17\n10,13,1\n13,1,9\n14,3,8\n18,17,8\n10,11,1\n7,4,12\n13,6,3\n3,10,16\n3,12,16\n7,10,18\n14,5,14\n16,6,16\n18,12,15\n8,4,7\n7,9,19\n4,17,6\n14,19,9\n4,9,3\n13,14,3\n9,14,4\n4,17,14\n17,14,15\n11,19,9\n13,3,13\n14,19,10\n5,7,4\n8,12,18\n8,4,11\n19,5,13\n17,16,10\n5,11,18\n3,12,8\n14,3,13\n16,9,17\n4,11,5\n16,4,14\n7,12,19\n8,9,20\n14,14,4\n9,18,4\n14,6,16\n4,10,15\n13,8,2\n13,2,14\n13,7,5\n14,20,12\n12,17,5\n5,3,10\n13,15,5\n2,7,6\n17,14,6\n19,10,7\n12,17,4\n2,13,13\n16,10,19\n16,5,6\n7,7,15\n5,6,5\n12,4,11\n7,9,6\n7,8,18\n14,5,6\n13,15,4\n2,9,13\n9,8,4\n5,8,18\n12,5,18\n9,12,3\n15,4,9\n11,16,16\n2,12,7\n17,15,15\n6,4,10\n16,12,13\n15,15,8\n18,14,15\n12,15,4\n3,9,8\n8,2,6\n14,2,9\n15,12,2\n18,10,8\n7,5,14\n15,15,18\n11,14,3\n6,8,5\n11,8,3\n10,16,4\n6,16,3\n13,19,10\n5,2,12\n9,3,6\n3,4,11\n7,10,19\n16,16,9\n8,15,17\n3,15,9\n5,8,17\n19,7,12\n9,7,19\n11,5,16\n9,9,19\n9,17,16\n19,13,12\n13,17,6\n18,11,17\n8,18,13\n2,7,11\n5,12,17\n9,1,10\n9,11,2\n3,9,5\n20,8,11\n12,14,19\n9,15,18\n1,12,12\n7,19,9\n8,5,5\n11,8,19\n17,8,15\n2,14,13\n16,13,6\n14,5,12\n5,5,9\n10,7,5\n3,11,7\n11,16,11\n15,17,7\n17,16,12\n8,14,3\n5,4,15\n17,13,16\n8,15,4\n5,16,14\n15,12,17\n4,10,5\n18,14,11\n7,3,7\n6,11,16\n6,6,15\n19,12,13\n4,16,7\n13,18,7\n8,3,6\n8,4,15\n18,9,10\n7,12,16\n6,17,8\n17,11,4\n13,12,18\n1,8,12\n17,12,8\n5,5,5\n17,18,8\n15,4,6\n3,5,7\n9,9,3\n11,5,6\n15,14,10\n4,8,4\n6,12,15\n19,7,13\n14,5,13\n3,11,5\n8,17,13\n4,6,13\n9,9,2\n17,11,7\n14,6,7\n9,14,2\n14,15,17\n8,11,1\n12,14,4\n3,5,10\n16,14,17\n16,9,5\n10,4,6\n5,6,6\n6,13,18\n8,16,5\n6,4,8\n19,10,9\n8,2,7\n7,17,7\n2,8,6\n3,15,13\n8,5,8\n15,14,16\n18,5,14\n20,9,9\n17,12,18\n4,14,5\n2,7,14\n5,7,16\n18,13,9\n4,13,4\n10,2,14\n10,7,1\n12,4,15\n5,5,4\n6,6,6\n9,5,4\n16,7,17\n11,2,15\n8,7,4\n17,3,7\n17,12,9\n7,5,5\n15,14,15\n3,12,10\n12,13,3\n16,17,12\n17,6,12\n17,3,12\n10,4,13\n7,13,18\n11,9,19\n18,14,7\n19,12,9\n7,19,12\n5,9,10\n3,14,14\n6,15,16\n3,17,11\n9,15,4\n3,11,11\n6,19,12\n18,16,12\n4,7,13\n7,4,13\n6,7,14\n5,6,11\n4,8,12\n12,16,4\n3,12,11\n8,13,19\n7,19,10\n2,10,13\n19,10,5\n18,5,9\n6,14,3\n6,13,7\n18,14,16\n12,14,2\n7,4,17\n17,9,3\n5,11,5\n16,14,18\n8,5,4\n10,11,20\n6,5,4\n14,5,3\n12,15,2\n7,11,4\n12,6,18\n2,13,8\n8,7,20\n17,7,4\n12,17,8\n4,8,5\n19,10,10\n2,9,9\n5,9,12\n14,6,15\n9,18,6\n15,10,19\n16,7,7\n3,5,13\n14,6,11\n12,5,6\n17,5,11\n2,13,9\n8,9,19\n9,15,2\n11,17,7\n5,5,6\n19,11,11\n9,3,7\n17,9,5\n6,4,9\n14,15,8\n18,12,10\n12,7,1\n4,16,10\n17,15,5\n12,4,5\n3,5,14\n5,11,7\n6,16,16\n15,19,15\n13,17,16\n5,13,7\n9,7,3\n19,7,14\n6,8,2\n13,18,14\n17,8,9\n10,13,3\n14,9,4\n11,5,18\n13,2,13\n11,16,4\n10,3,6\n5,7,13\n9,13,20\n17,14,5\n17,5,8\n7,4,5\n12,8,18\n14,7,17\n14,16,3\n18,13,10\n14,4,12\n8,14,5\n15,18,7\n14,13,6\n19,13,11\n4,4,10\n14,17,11\n11,4,12\n4,13,12\n7,16,3\n9,12,2\n14,3,5\n8,17,14\n6,7,3\n13,7,19\n8,5,17\n14,4,9\n7,15,2\n14,19,11\n1,9,14\n6,17,9\n18,12,5\n2,13,11\n6,14,17\n15,19,10\n9,18,14\n18,12,11\n3,9,12\n5,5,15\n10,16,12\n11,10,3\n5,14,6\n18,7,11\n15,14,3\n11,2,12\n11,11,2\n7,17,11\n16,16,7\n16,3,7\n6,19,11\n4,6,7\n19,9,8\n2,12,10\n6,3,10\n8,11,2\n6,19,13\n15,11,16\n6,17,12\n18,16,14\n17,8,5\n7,13,19\n9,16,18\n18,5,10\n12,9,1\n15,5,6\n9,2,12\n9,2,7\n16,15,4\n9,6,3\n9,16,15\n1,12,14\n8,18,12\n17,12,11\n13,10,3\n7,6,8\n8,1,10\n13,3,12\n8,6,17\n16,2,12\n10,18,13\n10,4,19\n6,3,6\n6,3,15\n6,14,15\n19,8,10\n15,11,2\n11,20,13\n14,17,10\n11,2,11\n10,3,5\n8,13,5\n9,4,4\n17,10,6\n7,10,1\n11,11,3\n9,18,12\n8,6,6\n15,18,12\n7,13,4\n7,7,17\n14,15,6\n3,9,7\n16,5,14\n15,18,14\n12,10,19\n12,9,19\n10,19,13\n6,2,12\n10,2,10\n14,17,5\n10,2,9\n5,6,10\n12,7,2\n6,17,14\n3,12,15\n5,15,15\n15,5,7\n14,2,12\n9,8,19\n11,3,13\n13,20,9\n6,15,13\n4,7,6\n10,9,4\n7,6,7\n16,18,13\n14,3,15\n17,11,18\n7,17,16\n6,12,4\n8,19,7\n7,20,10\n15,5,5\n18,15,10\n11,17,6\n11,3,5\n8,10,18\n4,15,9\n8,8,18\n5,12,8\n14,12,20\n3,7,8\n16,17,6\n12,4,14\n13,19,13\n5,11,17\n17,16,15\n10,20,8\n17,4,12\n14,13,3\n15,14,4\n19,12,14\n10,2,7\n12,9,17\n16,15,13\n14,16,6\n3,15,10\n17,4,11\n8,17,4\n8,15,3\n2,13,10\n4,13,15\n7,13,17\n14,17,14\n4,9,15\n3,13,5\n13,12,19\n16,5,10\n6,3,8\n10,10,17\n11,19,10\n5,5,10\n4,8,15\n4,6,11\n10,19,9\n7,2,8\n10,4,5\n20,10,9\n2,10,7\n18,5,13\n7,20,9\n19,6,13\n18,10,14\n16,15,5\n20,9,10\n3,4,12\n5,9,18\n8,18,14\n11,14,20\n10,10,20\n12,14,17\n17,6,11\n9,17,6\n10,17,17\n11,14,2\n14,12,4\n15,15,17\n4,14,7\n5,16,15\n2,10,9\n11,0,10\n14,7,14\n16,13,4\n2,15,9\n8,17,6\n10,16,15\n13,14,20\n10,8,19\n12,1,11\n9,14,19\n9,3,5\n6,7,17\n11,18,12\n15,2,7\n15,15,15\n3,5,12\n5,18,12\n15,6,3\n10,9,1\n3,15,7\n2,10,11\n2,11,12\n17,13,4\n7,5,4\n6,10,2\n2,9,11\n7,15,16\n14,17,17\n13,1,15\n11,16,12\n11,12,20\n18,7,9\n12,15,6\n7,18,9\n8,3,5\n9,4,17\n6,12,19\n6,3,7\n17,6,9\n6,14,5\n12,10,20\n12,4,4\n4,16,12\n12,4,6\n12,10,17\n10,9,19\n6,12,16\n10,15,2\n3,9,15\n10,7,19\n15,13,18\n6,14,18\n6,19,10\n12,17,12\n7,15,5\n18,9,12\n3,4,10\n18,17,12\n9,5,6\n8,6,5\n6,3,11\n16,12,3\n3,13,10\n3,10,13\n12,10,16\n7,17,6\n9,4,16\n12,3,11\n4,5,11\n7,14,15\n9,16,17\n2,6,12\n5,13,18\n5,17,12\n17,8,6\n17,15,14\n7,6,3\n16,3,12\n19,10,12\n2,8,9\n5,5,12\n18,11,11\n15,17,9\n9,3,9\n10,16,6\n11,9,6\n7,14,17\n13,9,19\n10,13,18\n17,5,15\n11,3,15\n6,7,5\n5,11,6\n17,18,12\n11,15,18\n16,4,9\n6,12,6\n19,9,10\n5,13,8\n4,18,9\n1,8,11\n11,3,16\n14,1,9\n2,7,7\n19,13,5\n8,18,5\n16,16,12\n1,12,9\n6,2,9\n8,18,15\n16,2,9\n15,15,13\n16,9,4\n5,2,9\n15,17,12\n17,10,5\n17,13,11\n14,16,7\n4,14,14\n12,1,10\n8,4,16\n3,16,12\n13,2,9\n14,3,10\n18,10,9\n10,14,18\n19,8,7\n20,14,9\n12,14,18\n17,5,9\n10,3,10\n4,5,9\n4,18,12\n4,5,16\n12,2,7\n8,2,13\n11,4,13\n18,11,6\n14,10,19\n14,16,14\n5,6,8\n10,3,16\n7,2,14\n18,15,9\n4,9,6\n12,9,20\n16,10,16\n3,12,9\n13,10,20\n3,14,10\n2,6,8\n12,17,14\n18,9,13\n20,10,11\n10,3,7\n12,2,13\n8,3,7\n4,15,14\n11,19,4\n8,17,3\n11,17,16\n13,14,6\n11,15,17\n6,4,14\n20,11,9\n6,15,18\n18,6,16\n13,18,8\n9,17,5\n4,14,11\n14,2,15\n7,3,11\n11,2,5\n7,12,18\n1,10,13\n5,14,4\n12,16,18\n11,4,17\n2,7,13\n8,18,8\n18,12,13\n18,12,9\n17,4,9\n10,19,10\n16,8,10\n18,11,7\n14,4,7\n11,14,4\n14,3,11\n11,16,6\n17,14,11\n10,10,19\n11,14,18\n18,11,14\n15,12,19\n3,12,12\n18,8,15\n13,6,17\n18,16,7\n13,12,20\n10,6,3\n12,6,5\n17,14,4\n6,10,18\n13,18,10\n9,20,13\n7,19,14\n8,15,5\n5,16,8\n6,15,15\n11,15,2\n13,11,18\n5,6,15\n9,14,17\n8,7,8\n9,15,6\n7,10,2\n4,16,13\n7,15,4\n1,11,14\n2,15,12\n19,9,12\n16,11,15\n14,17,7\n13,8,16\n16,11,16\n6,9,5\n15,7,3\n9,12,20\n6,8,17\n15,7,18\n15,16,16\n6,17,11\n16,14,3\n7,12,4\n15,2,8\n14,15,18\n18,8,8\n10,8,3\n4,16,11\n10,18,9\n17,9,7\n16,10,17\n12,15,18\n12,2,8\n14,18,6\n8,8,19\n6,4,6\n13,8,15\n19,5,8\n8,9,5\n3,16,13\n10,4,15\n6,13,14\n9,19,6\n8,17,8\n14,17,13\n5,3,7\n15,10,2\n6,14,19\n4,7,16\n3,16,15\n3,14,8\n3,12,4\n11,9,2\n15,11,18\n17,7,15\n10,5,5\n10,2,13\n5,15,6\n15,9,16\n5,10,6\n16,14,5\n17,12,6\n16,6,5\n14,16,15\n7,5,15\n17,13,17\n18,7,12\n6,16,12\n5,14,9\n3,12,17\n19,7,7\n14,5,4\n9,7,2\n15,17,5\n16,14,12\n11,17,18\n17,14,7\n16,16,17\n10,20,11\n13,4,7\n7,6,6\n4,6,9\n11,7,3\n8,16,17\n3,10,11\n6,15,11\n16,9,19\n5,10,3\n11,2,14\n5,4,13\n16,4,15\n10,20,12\n11,15,4\n16,14,6\n15,5,10\n6,19,14\n11,9,3\n9,6,17\n17,17,8\n15,2,10\n3,8,6\n18,6,11\n9,18,8\n3,11,8\n2,13,12\n8,19,11\n3,11,17\n10,18,17\n9,2,6\n17,6,14\n15,3,6\n18,9,17\n7,18,8\n3,17,10\n11,18,11\n2,11,5\n12,17,17\n18,10,7\n15,9,2\n2,8,12\n19,12,8\n13,4,14\n15,8,18\n4,9,5\n3,13,16\n11,13,18\n14,16,4\n10,14,4\n4,17,12\n10,3,11\n8,4,5\n18,13,14\n12,18,6\n16,17,11\n13,3,9\n10,1,9\n18,16,13\n13,16,14\n14,4,8\n18,10,17\n7,6,18\n18,6,14\n8,17,5\n2,6,10\n14,7,15\n7,4,9\n1,10,12\n3,6,10\n3,15,14\n7,20,13\n19,14,8\n7,5,16\n5,12,6\n14,6,18\n8,3,9\n6,5,7\n7,17,13\n11,3,12\n3,6,14\n3,6,8\n10,4,9\n10,3,9\n4,11,11\n16,9,16\n9,17,4\n18,15,11\n8,15,15\n7,18,16\n17,16,6\n17,9,16\n3,8,9\n10,10,0\n9,8,20\n12,9,18\n14,2,13\n4,14,10\n10,9,18\n13,7,6\n15,16,15\n14,4,10\n9,2,9\n19,9,15\n12,13,17\n6,13,2\n4,12,6\n7,12,17\n10,8,18\n12,18,5\n6,8,3\n5,8,14\n12,8,19\n5,13,16\n19,13,10\n18,8,11\n19,8,9\n11,7,4\n15,3,10\n5,15,4\n8,20,7\n2,15,10\n18,10,15\n16,17,14\n6,18,7\n10,18,15\n14,8,3\n11,13,3\n15,4,10\n13,14,18\n5,3,14\n9,3,4\n4,4,8\n7,2,11\n14,9,17\n4,11,6\n5,11,15\n16,15,15\n9,5,5\n11,4,8\n14,6,17\n14,11,19\n5,16,9\n11,18,7\n14,6,3\n18,11,12\n18,9,4\n18,9,11\n8,7,5\n15,9,4\n9,10,3\n14,18,18\n13,17,15\n8,9,4\n11,3,6\n10,18,8\n18,8,13\n4,13,3\n7,9,18\n8,3,12\n17,14,14\n6,19,7\n9,5,16\n7,14,4\n4,3,11\n15,4,16\n15,7,4\n8,5,16\n13,7,3\n14,4,11\n15,16,5\n15,10,18\n20,7,9\n19,6,11\n12,1,9\n5,7,9\n15,18,5\n8,3,17\n15,11,4\n8,14,4\n20,10,7\n2,12,12\n17,6,16\n17,15,16\n11,16,17\n7,3,15\n11,2,9\n3,15,15\n4,12,7\n14,12,19\n13,1,11\n9,15,5\n12,12,18\n5,9,15\n4,8,11\n9,2,10\n2,12,8\n4,11,13\n11,5,19\n14,3,7\n18,16,9\n20,15,12\n10,1,13\n4,18,13\n9,18,16\n5,10,17\n5,10,5\n10,6,1\n10,18,6\n12,13,4\n8,19,10\n3,6,6\n16,10,2\n8,7,19\n16,12,16\n3,10,6\n12,19,13\n5,6,9\n9,2,11\n1,11,10\n13,14,17\n1,14,11\n12,18,16\n19,10,17\n13,16,16\n11,18,16\n14,19,13\n3,8,17\n7,13,16\n12,2,15\n7,2,10\n13,4,9\n20,11,10\n3,17,13\n8,17,9\n16,17,16\n7,9,5\n4,17,13\n9,15,7\n18,14,5\n2,8,13\n14,14,2\n15,14,7\n18,9,7\n10,8,17\n2,9,8\n9,16,6\n20,12,12\n14,14,3\n6,14,6\n12,7,17\n10,6,18\n11,17,4\n9,3,13\n12,3,9\n13,2,16\n17,16,11\n4,9,18\n9,9,17\n10,5,7\n9,1,11\n4,12,5\n12,3,12\n17,10,17\n7,1,10\n6,8,19\n14,5,9\n2,7,12\n19,11,14\n5,18,8\n10,2,11\n5,16,17\n12,10,18\n12,19,14\n3,14,15\n7,10,17\n16,6,4\n17,16,9\n18,13,5\n5,10,2\n10,8,20\n14,3,9\n7,10,3\n19,15,8\n4,7,7\n9,5,18\n18,11,9\n16,5,7\n16,10,3\n10,11,5\n15,4,11\n18,11,16\n5,13,4\n8,10,20\n14,10,18\n17,4,7\n7,13,2\n4,15,16\n16,4,5\n6,9,17\n13,9,18\n5,3,9\n8,4,9\n7,12,2\n20,9,12\n9,14,18\n3,14,13\n15,20,10\n11,12,17\n12,3,15\n2,14,14\n11,1,8\n19,10,13\n10,12,21\n16,15,16\n5,12,14\n20,13,9\n8,17,15\n17,3,9\n15,18,10\n8,11,17\n14,14,17\n11,17,17\n3,13,12\n9,4,13\n9,18,9\n19,14,7\n17,13,6\n6,8,18\n3,5,11\n14,5,5\n3,11,12\n6,10,14\n6,16,13\n15,13,15\n13,19,11\n14,8,19\n5,15,16\n6,8,6\n7,16,18\n1,14,12\n8,12,17\n8,7,18\n14,17,8\n10,13,4\n7,6,5\n10,7,16\n13,13,20\n1,8,8\n17,5,13\n8,17,11\n1,11,12\n11,16,5\n17,3,10\n2,6,11\n7,6,16\n8,16,4\n3,8,13\n3,14,5\n12,19,7\n3,8,14\n10,8,1\n14,5,15\n12,16,16\n5,4,6\n15,10,5\n9,4,10\n9,10,19\n13,13,1\n5,10,13\n9,19,12\n4,10,3\n16,8,7\n15,6,15\n12,12,1\n9,17,11\n19,12,10\n16,7,15\n19,7,11\n9,9,5\n10,12,3\n10,17,13\n18,6,7\n4,14,15\n15,6,17\n4,13,18\n10,2,6\n3,9,13\n7,2,12\n9,11,19\n2,12,9\n8,7,3\n17,10,4\n2,10,10\n14,3,12\n7,19,13\n11,12,1\n4,18,10\n13,12,2\n13,18,11\n16,4,6\n14,19,8\n6,7,4\n18,12,4\n12,6,17\n14,5,7\n11,10,19\n3,8,12\n15,9,1\n12,17,13\n2,6,14\n12,17,3\n19,12,4\n17,9,17\n19,13,14\n12,18,14\n5,19,10\n9,18,7\n5,10,18\n9,12,18\n5,14,3\n5,10,7\n11,10,2\n18,12,14\n13,15,3\n7,12,15\n16,12,18\n4,13,8\n13,11,16\n7,16,12\n12,2,14\n16,12,4\n13,17,3\n18,10,10\n12,3,5\n2,16,12\n15,15,3\n18,4,14\n4,6,16\n18,6,9\n17,11,17\n18,16,8\n10,16,7\n13,8,5\n4,12,17\n3,9,6\n10,18,4\n9,4,11\n16,16,11\n14,4,6\n10,9,20\n12,11,17\n16,16,16\n12,6,15\n16,9,7\n6,11,17\n15,3,13\n11,19,5\n18,8,16\n8,2,9\n18,16,10\n6,11,15\n14,2,11\n4,15,11\n20,12,8\n3,9,16\n15,8,2\n15,13,2\n6,18,15\n11,18,10\n5,8,10\n13,19,6\n17,5,12\n11,14,17\n1,11,13\n2,8,11\n13,14,16\n12,10,1\n5,14,8\n3,15,12\n7,15,18\n4,11,14\n16,6,11\n3,5,8\n19,9,6\n17,16,13\n17,14,9\n2,14,9\n14,1,10\n18,13,4\n11,10,1\n12,8,16\n13,12,17\n11,3,7\n19,7,10\n17,12,17\n13,5,3\n13,7,2\n7,19,15\n9,2,13\n20,8,12\n17,12,7\n5,2,8\n12,15,5\n7,14,5\n8,18,10\n5,8,13\n15,3,12\n9,3,10\n10,10,3\n5,6,13\n18,8,9\n16,13,16\n5,3,15\n16,14,4\n12,3,14\n6,13,3\n11,5,3\n5,18,10\n10,17,14\n10,7,17\n3,8,10\n12,18,10\n8,12,1\n4,5,5\n3,11,10\n6,8,16\n8,7,16\n5,7,11\n7,7,2\n11,19,8\n5,15,14\n9,20,8\n8,15,19\n17,13,3\n14,2,6\n6,12,3\n2,7,10\n11,8,1\n7,5,17\n9,2,15\n5,15,10\n17,12,13\n13,7,4\n7,2,7\n19,14,10\n16,7,11\n20,11,13\n18,7,17\n8,19,15\n7,8,16\n18,15,13\n17,10,14\n4,8,17\n13,18,17\n9,18,17\n20,13,12\n4,13,13\n17,10,13\n12,6,8\n15,11,19\n17,18,9\n4,13,9\n11,1,12\n7,8,17\n11,12,2\n16,18,11\n19,6,7\n4,18,8\n13,10,19\n12,5,5\n18,8,12\n2,11,11\n18,7,14\n1,9,12\n18,17,10\n8,12,5\n17,7,8\n15,18,6\n15,18,13\n8,1,13\n15,11,3\n13,4,13\n12,17,19\n13,15,18\n6,14,2\n16,18,14\n7,18,5\n8,13,4\n8,16,6\n13,6,18\n11,3,11\n5,13,6\n13,3,6\n5,13,9\n9,4,5\n4,7,9\n4,4,6\n10,1,8\n6,15,14\n15,4,15\n2,12,15\n15,16,8\n15,8,16\n12,20,7\n11,6,5\n18,15,14\n2,13,7\n7,15,3\n15,14,8\n13,5,6\n11,20,12\n3,16,11\n10,4,7\n12,5,7\n11,4,3\n2,5,10\n13,4,8\n10,5,8\n16,13,11\n18,17,14\n17,12,5\n13,10,2\n3,10,4\n8,5,9\n18,13,17\n14,8,18\n13,7,17\n6,15,7\n11,15,5\n1,13,12\n13,11,3\n9,16,10\n12,7,6\n7,16,16\n10,7,20\n12,16,2\n4,8,9\n14,9,19\n10,5,18\n2,13,14\n12,9,2\n7,6,14\n12,17,11\n14,14,19\n19,7,6\n16,6,12\n16,15,8\n15,6,5\n6,4,11\n18,13,6\n11,10,21\n12,17,15\n16,15,10\n8,9,18\n7,12,20\n19,15,13\n6,6,9\n19,14,13\n4,11,17\n9,10,18\n4,14,17\n20,7,12\n5,17,15\n8,15,2\n10,15,17\n3,15,6\n16,8,17\n1,14,9\n12,11,18\n3,6,11\n13,19,14\n14,6,14\n1,15,12\n6,10,16\n14,16,10\n10,5,6\n6,11,5\n8,14,16\n17,9,10\n9,14,20\n7,16,14\n9,5,2\n5,10,16\n14,7,19\n8,4,3\n11,12,19\n14,16,17\n7,6,15\n5,15,13\n15,3,15\n15,5,11\n8,5,6\n3,11,6\n7,18,6\n11,10,0\n6,4,16\n8,7,2\n9,17,8\n13,17,13\n10,1,11\n3,7,6\n3,11,9\n9,7,6\n8,9,3\n4,7,12\n17,13,15\n8,5,2\n15,13,16\n6,5,16\n15,10,4\n15,16,14\n7,8,2\n10,18,11\n6,14,14\n3,6,5\n12,19,11\n16,15,7\n4,5,6\n10,15,1\n14,10,7\n14,4,4\n19,9,16\n5,15,5\n18,11,15\n14,18,10\n7,5,7\n4,10,11\n4,15,5\n4,14,12\n17,17,13\n19,11,8\n11,16,15\n20,8,13\n8,11,18\n6,17,13\n14,11,6\n1,10,7\n5,4,16\n13,14,19\n6,5,15\n13,15,19\n4,10,17\n11,12,3\n13,5,19\n7,3,6\n13,18,9\n13,7,20\n1,7,9\n16,9,3\n11,9,5\n15,8,14\n9,9,18\n6,13,15\n13,14,15\n16,6,18\n12,14,1\n9,6,19\n15,15,5\n9,17,15\n5,9,6`;

const air = 0;
const lava  = 1

const points = input
  .split('\n')
  .map(line => line.split(','))
  .map(coord => ({
    x: Number(coord[0]),
    y: Number(coord[1]),
    z: Number(coord[2])
  }));

const maximums = ['x', 'y', 'z'].map(dim => {
  return Math.max(...points.map(p => p[dim]));
})

const mat3d = Array.from({length: maximums[0] + 1}, () => {
  return Array.from({length: maximums[1] + 1}, () => {
    return Array(maximums[2] + 1).fill(air);
  })
});

for (const p of points) {
  mat3d[p.x][p.y][p.z] = lava;
}

function getNeighborhoodVonNeumann({x , y, z}) {
  return [
    {x: x + 1, y, z},
    {x: x - 1, y, z},
    {x, y: y + 1, z},
    {x, y: y - 1, z},
    {x, y, z: z - 1},
    {x, y, z: z + 1},
  ].filter(coord => isValidPosition(coord));
}

function nbLavaNeighbors({x, y, z}) {
  const lavaNeighborhood = getNeighborhoodVonNeumann({x, y, z})
   .filter(({x, y, z}) => mat3d[x][y][z] == lava);
  return lavaNeighborhood.length;
}

function isValidPosition({x, y, z}) {
  return x >= 0 && x < mat3d.length
      && y >= 0 && y < mat3d[0].length
      && z >= 0 && z < mat3d[0][0].length
}

// part 1
let sum = 0;
for (let x = 0; x < mat3d.length; x++) {
  for (let y = 0; y < mat3d[0].length; y++) {
    for (let z = 0; z < mat3d[0][0].length; z++) {
      if (mat3d[x][y][z] == lava) {
        sum += 6 - nbLavaNeighbors({x,y,z});
      }
    }
  }
}
console.log(sum);

// Part 2
function h(coord) {
  return `${coord.x}:${coord.y}:${coord.z}`;
}

function isOnBorder({x, y, z}) {
  return x === 0 || x === mat3d.length - 1
      || y === 0 || y === mat3d[0].length - 1
      || z === 0 || z === mat3d[0][0].length - 1
}


// Breadth First Search
function getAllLavaSides(from, visited) {
  if (visited.has(h(from))) return 0;
  visited.add(h(from));
  if (isOnBorder(from)) return 0;

  const nbLavaNeighborsMap = new Map();
  const frontier = [];
  frontier.push(from);
  nbLavaNeighborsMap.set(h(from), nbLavaNeighbors(from));

  while (frontier.length > 0) {
    const cell = frontier.shift();
    // get only air neighbors
    const neighbors = getNeighborhoodVonNeumann(cell)
      .filter(({x, y, z}) => mat3d[x][y][z] == air);
    for (const neighbor of neighbors) {
      // Ignore allready visited cells
      if (nbLavaNeighborsMap.has(h(neighbor))) continue;
      visited.add(h(neighbor));
      // if the BFS reach the border, we do noot count those air cells
      if (isOnBorder(neighbor)) return 0;
      frontier.push(neighbor);
      nbLavaNeighborsMap.set(h(neighbor), nbLavaNeighbors(neighbor));
    }
  }

  return [...nbLavaNeighborsMap.values()].reduce((acc, val) => acc + val, 0);
}

const visited = new Set();
for (let x = 0; x < mat3d.length; x++) {
  for (let y = 0; y < mat3d[0].length; y++) {
    for (let z = 0; z < mat3d[0][0].length; z++) {
      if (mat3d[x][y][z] == air) {
        sum -= getAllLavaSides({x, y, z}, visited);
      }
    }
  }
}
console.log(sum);